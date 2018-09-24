const fs = require('fs');
const sdkifier = require('ce-sdkifier');
const mustache = require('mustache');
const tsc = require('typescript');
const {platformSDK} = require('./platformSDK')

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'before:package:initialize': this.beforePackage.bind(this),
      'after:deploy:finalize': this.afterDeploy.bind(this)
    };
  }

  async afterDeploy() {
    const provider = this.serverless.getProvider(this.serverless.service.provider.name);
    const stage = this.options.stage || this.serverless.service.provider.stage;
    const response = await provider.request('CloudFormation', 'describeStacks', {StackName: provider.naming.getStackName(stage)});
    const endpoint = response.Stacks[0].Outputs.find(output => output.OutputKey === 'ServiceEndpoint').OutputValue;
    const functions = this.serverless.service.functions
    for (let key of Object.keys(functions)) {
      for (let event of functions[key].events) {
        if (event.http.id) {
          console.log(`setting instance ${event.http.id} callback url to ${endpoint}/${event.http.path}`);
          await this.platform.updateInstanceById(event.http.id, {
            configuration: {'event.notification.callback.url': `${endpoint}/${event.http.path}`}
          }).run();
        }
      }
    }
  }

  async beforePackage() {
    let variables = [];
    let modules = [];
    const functions = this.serverless.service.functions;
    const resources = this.serverless.service.resources.Resources;
    for (let key of Object.keys(functions)) {
      for (let event of functions[key].events) {
        if (event.instance) {
          const handler = functions[key].handler.split('.');
          const module = modules.find(module => module.name === handler[0]);
          if (module) {
            if (!module.handlers.includes(handler[1])) {
              module.handlers.push(handler[1]);
            }
          } else {
            modules.push({name: handler[0], handlers: [handler[1]]});
          }
          functions[key].handler = `wrapper.${handler.join('_')}`;
          event.http = `POST event/${event.instance.resource}`;
          event.http = {
            path: `event/${event.instance.resource}`,
            method: 'POST',
            id: resources[event.instance.resource].Properties.id
          }
          delete event.instance
        }
      }
    }
    const account = Object.entries(resources).find(entry => entry[1].Type === 'CE::Account')[1].Properties;
    if (!fs.existsSync(process.cwd() + '/sdks')) {
      fs.mkdirSync(process.cwd() + '/sdks');
    }
    let authHeader;
    if (account.userToken && account.orgToken) {
      authHeader = `User ${account.userToken}, Organization ${account.orgToken}`;
    }
    this.platform = new platformSDK(account.baseUrl, authHeader);
    let result = await sdkifier.generatePlatformSdk(account.baseUrl, authHeader, null, 'sdks')
    for (let resource of Object.entries(resources)) {
      if (resource[1].Type.startsWith('CE::Hub::')) {
        const hub = resource[1].Type.substr(9);
        result = await sdkifier.generateHubSdk(hub, account.baseUrl, authHeader, null, 'sdks');
        if (!result.success) {
          throw new Error(result.message);
        }
        if (resource[1].Properties.id) {
          const instance = await this.platform.getInstanceById(resource[1].Properties.id).run();
          variables.push({name: resource[0], type: hub, token: instance.token});
        } else {
          variables.push({name: resource[0], type: hub});
        }
      } else if (resource[1].Type.startsWith('CE::Element::')) {
        const elementKey = resource[1].Type.substr(13);
        if (resource[1].Properties.id) {
          result = await sdkifier.generateInstanceSdk(
            resource[1].Properties.id,
            account.baseUrl,
            authHeader,
            elementKey + 'SDK',
            'sdks');
          if (!result.success) {
            throw new Error(result.message);
          }
          const instance = await this.platform.getInstanceById(resource[1].Properties.id).run();
          variables.push({name: resource[0], type: elementKey, token: instance.token});
        } else {
          result = await sdkifier.generateElementSdk(elementKey, null, account.baseUrl, authHeader, null, 'sdks');
          if (!result.success) {
            throw new Error(result.message);
          }
          variables.push({name: resource[0], type: elementKey});
        }
      }
    }
    const ceResources = Object.keys(resources).filter(key => resources[key].Type.startsWith('CE::'));
    for (let ceResource of ceResources) {
      delete resources[ceResource];
    }
    const template = fs.readFileSync(__dirname + '/configurator.mustache', 'utf8');
    const view = {
      baseUrl: account.baseUrl,
      authHeader: authHeader,
      variables: variables
    };
    const configurator = mustache.render(template,view);
    const template2 = fs.readFileSync(__dirname + '/wrapper.mustache', 'utf8');
    const view2 = {
      modules: modules
    };
    const wrapper = mustache.render(template2,view2);
    const tsCompilerOutput =
      tsc.transpileModule(configurator, {
        compilerOptions: {
          module: tsc.ModuleKind.CommonJS
        }
      });
    for (let diagnostic of tsCompilerOutput.diagnostics) {
      console.log(diagnostic);
    }
    fs.writeFileSync(process.cwd() + '/configurator.ts', configurator);
    fs.writeFileSync(process.cwd() + '/configurator.js', tsCompilerOutput.outputText);
    fs.writeFileSync(process.cwd() + '/wrapper.js', wrapper);
  }
}

module.exports = ServerlessPlugin;
