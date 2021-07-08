const fs = require('fs');
const sdkifier = require('ce-sdkifier');
const mustache = require('mustache');
const tsc = require('typescript');
const {platformSDK} = require('ce-sdkifier/src/core/platformSDK')
const babel = require('babel-core')

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'before:package:initialize': this.beforePackage.bind(this),
      'after:deploy:finalize': this.afterDeploy.bind(this),
      'before:invoke:invoke': this.beforeInvoke.bind(this),
      'before:invoke:local:invoke': this.beforeInvokeLocal.bind(this),
    };
  }

  validateFunction() {
    const validFunctions = Object.keys(this.serverless.service.functions)
    if (!validFunctions.includes(this.options.function)) {
      throw `Function "${this.options.function}" doesn't exist in this Service. Valid values: ${validFunctions.join(', ')}`
    }
  }

  async beforeInvoke() {
    this.validateFunction()
    return this.prep(false)
  }

  async beforeInvokeLocal() {
    this.validateFunction()
    return this.prep(true)
  }

  async beforePackage() {
    return this.prep(true)
  }

  logDebug(message) {
    if (process.env.SLS_DEBUG === '*') {
      this.serverless.cli.log(message)
    }
  }

  async prepSdks(accountProperties, authHeader, resources) {
    this.logDebug('generating platform SDK')
    this.platform = new platformSDK(accountProperties.baseUrl, authHeader);
    for (let resource of Object.entries(resources)) {
      if (resource[1].Type.startsWith('CE::Hub::')) {
        const hub = resource[1].Type.substr(9);
        this.logDebug(`generating ${hub} SDK`)
        const result = await sdkifier.generateHubSdk(hub, accountProperties.baseUrl, authHeader, null, 'sdks');
        if (!result.success) {
          throw new Error(result.message);
        }
      } else if (resource[1].Type.startsWith('CE::Element::')) {
        const elementKey = resource[1].Type.substr(13);
        this.logDebug(`generating ${elementKey} SDK`)
        if (resource[1].Properties.id) {
          const result = await sdkifier.generateInstanceSdk(
            resource[1].Properties.id,
            accountProperties.baseUrl,
            authHeader,
            elementKey + 'SDK',
            'sdks');
          if (!result.success) {
            throw new Error(result.message);
          }
        } else {
          const result = await sdkifier.generateElementSdk(elementKey, null, accountProperties.baseUrl, authHeader, null, 'sdks');
          if (!result.success) {
            throw new Error(result.message);
          }
        }
      }
    }
  }

  async prepCheckpoints(service, provider, resources, functions, modules) {
    const dlqName = `${service.service}-dead-letter-queue`
    const dlqRef = 'deadLetterQueue'
    provider.iamRoleStatements.push({
      Effect: 'Allow',
      Action: ['sqs:sendMessage', 'sqs:receiveMessage', 'sqs:deleteMessage'],
      Resource: {
        'Fn::GetAtt': [
          dlqRef,
          'Arn'
        ]
      }
    })
    resources[dlqRef] = {
      Type: 'AWS::SQS::Queue',
      Properties: {
        QueueName: dlqName
      }
    };
    for (let key of Object.keys(functions)) {
      const queueName = `${functions[key].name}-queue`
      const queueRef = `${key}Queue`
      functions[key].events.push({
        sqs: {
          arn: {
            'Fn::GetAtt': [
              queueRef,
              'Arn'
            ]
          }
        }
      });
      provider.iamRoleStatements.push({
        Effect: 'Allow',
        Action: ['sqs:sendMessage'],
        Resource: {
          'Fn::GetAtt': [
            queueRef,
            'Arn'
          ]
        }
      })
      resources[queueRef] = {
        Type: 'AWS::SQS::Queue',
        Properties: {
          QueueName: queueName
        }
      }
      for (let event of functions[key].events) {
        if (event.maxCheckpointRetries) {
          functions[key].environment.SCEP_MAX_CHECKPOINT_RETRIES = event.maxCheckpointRetries;
          delete event.maxCheckpointRetries
        } else {
          functions[key].environment.SCEP_MAX_CHECKPOINT_RETRIES = 1;
        }
      }
    }
    // Add endpoint for resuming an execution that's in the DLQ
    functions.resume = {
      handler: 'wrapper.resume',
      name: `${service.service}-${provider.stage}-resume`,
      timeout: 30,
      memorySize: 128,
      events: [
        {
          http: {
            path: 'resume',
            method: 'post'
          }
        }
      ]
    }
    for (let module of modules) {
      const preprocessed = babel.transformFileSync(process.cwd() + '/' + module.name + '.js', {presets: ['env'], sourceMaps: 'inline'})
      const processed = babel.transform(preprocessed.code, {plugins: [__dirname + '/checkpoint.plugin.js'], sourceMaps: 'inline'})
      fs.writeFileSync(process.cwd() + '/' + module.name + '.babelized.js', processed.code);
      module.name = module.name + '.babelized'
    }
  }

  async prepResourceSets(service, provider, resources, triggerVariables, variables, accountProperties, functions) {
    const resourceSetsTableName = `${service.service}-${provider.stage}-resource-sets`
    provider.iamRoleStatements.push({
      Effect: 'Allow',
      Action: ['dynamodb:PutItem', 'dynamodb:Query', 'dynamodb:DeleteItem', 'dynamodb:GetItem'],
      Resource: `arn:aws:dynamodb:*:*:table/${resourceSetsTableName}`
    })
    provider.iamRoleStatements.push({
      Effect: 'Allow',
      Action: ['dynamodb:Query'],
      Resource: `arn:aws:dynamodb:*:*:table/${resourceSetsTableName}/index/*`
    })

    resources.resourceSets = {
      Type: 'AWS::DynamoDB::Table',
      Properties: {
        AttributeDefinitions: [
          {
            AttributeName: 'userToken',
            AttributeType: 'S'
          },
          {
            AttributeName: 'id',
            AttributeType: 'S'
          }
        ],
        BillingMode: 'PAY_PER_REQUEST',
        GlobalSecondaryIndexes: triggerVariables.map(variable => {return {
          IndexName: `${variable}-index`,
          KeySchema: [
            {
              AttributeName: `${variable}_id`,
              KeyType: 'HASH'
            }
          ],
          Projection: {
            ProjectionType: 'ALL'
          }
        }}),
        KeySchema: [
          {
            AttributeName: 'userToken',
            KeyType: 'HASH'
          },
          {
            AttributeName: 'id',
            KeyType: 'RANGE'
          }
        ],
        TableName: resourceSetsTableName
      }
    };

    for (let variable of triggerVariables) {
      resources.resourceSets.Properties.AttributeDefinitions.push({
        AttributeName: `${variable}_id`,
        AttributeType: 'N'
      })
    }
    provider.environment.RESOURCE_SETS_TABLE_NAME = resourceSetsTableName

    functions.resourceSetCRUD = {
      handler: 'wrapper.resourceSetCRUD',
      name: `${service.service}-${provider.stage}-resource-set-crud`,
      timeout: 30,
      memorySize: 128,
      environment: {
        ORG_TOKEN: accountProperties.orgToken,
        TRIGGER_VARIABLES: JSON.stringify(triggerVariables),
        VARIABLES: JSON.stringify(variables.map(variable => variable.name)),
        BASE_URL: accountProperties.baseUrl,
        // TODO this may not work for value variables
        DEFAULTS: JSON.stringify(variables.filter(variable => variable.id).reduce((result, variable) => {
          result[variable.name] = Number(variable.id)
          return result
        }, {}))
      },
      events: [
        {
          http: {
            path: 'resource-sets',
            method: 'ANY'
          }
        },
        {
          http: {
            path: 'resource-sets/{id}',
            method: 'ANY'
          }
        }
      ]
    }
  }

  async prep(buildSdks) {
    let variables = [];
    let modules = [];
    const service = this.serverless.service;
    const provider = service.provider;
    const functions = service.functions;
    if (!service.resources) {
      service.resources = {}
    }
    if (!service.resources.Resources) {
      service.resources.Resources = {}
    }
    const resources = service.resources.Resources;

    if (!provider.runtime) {
      provider.runtime = 'nodejs8.10';
    }
    if (!provider.iamRoleStatements) {
      provider.iamRoleStatements = [];
    }
    if (!provider.environment) {
      provider.environment = {}
    }
    if (!service.package) {
      service.package = {}
    }
    if (!service.package.exclude) {
      service.package.exclude = []
    }

    if (!provider.runtime) {
      provider.runtime = 'nodejs8.10';
    }

    const triggerVariables = [];

    for (let key of Object.keys(functions)) {
      if (!functions[key].timeout) {
        functions[key].timeout = 30;
      }
      if (!functions[key].memorySize) {
        functions[key].memorySize = 128;
      }
      if (!functions[key].environment) {
        functions[key].environment = {};
      }
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
      for (let event of functions[key].events) {
        if (event.instance) {
          if (!event.instance.resource) {
            throw new Error(`Function '${key}' is in error: An instance event must specify a resource`);
          }
          if (!resources[event.instance.resource]) {
            throw new Error(`Function '${key}' is in error: The referenced resource (${event.instance.resource}) does not exist`);
          }
          triggerVariables.push(event.instance.resource);
          event.http = {
            path: `event/${event.instance.resource}`,
            method: 'POST',
            id: resources[event.instance.resource].Properties.id
          }
          delete event.instance
        }
      }
    }
    const account = Object.entries(resources).find(entry => entry[1].Type === 'CE::Account');
    const accountProperties = account && account[1] ? account[1].Properties : {}
    let authHeader;
    if (accountProperties && accountProperties.userToken && accountProperties.orgToken) {
      authHeader = `User ${accountProperties.userToken}, Organization ${accountProperties.orgToken}`;
    }

    if (this.options.sdks !== false && buildSdks) {
      await this.prepSdks(accountProperties, authHeader, resources)
    }
    // TODO value variables also need to be saved in variables so that the configurator can populate and expose them
    // TODO But instance variables need to be called out for the configurator template for proper processing
    for (let resource of Object.entries(resources)) {
      if (resource[1].Type.startsWith('CE::Hub::')) {
        const hub = resource[1].Type.substr(9);
        if (this.platform && resource[1].Properties && resource[1].Properties.id) {
          const instance = await this.platform.getInstanceById(resource[1].Properties.id);
          variables.push({name: resource[0], type: hub, token: instance.token, id: resource[1].Properties.id});
        } else {
          variables.push({name: resource[0], type: hub});
        }
      } else if (resource[1].Type.startsWith('CE::Element::')) {
        const elementKey = resource[1].Type.substr(13);
        if (this.platform && resource[1].Properties && resource[1].Properties.id) {
          const instance = await this.platform.getInstanceById(resource[1].Properties.id);
          variables.push({name: resource[0], type: elementKey, token: instance.token, id: resource[1].Properties.id});
        } else {
          variables.push({name: resource[0], type: elementKey});
        }
      }
    }

    if (this.options.resourceSets !== false) {
      this.prepResourceSets(service, provider, resources, triggerVariables, variables, accountProperties, functions)
    }

    service.package.exclude.push('node_modules/serverless-cloud-elements-plugin/node_modules/**')
    service.package.exclude.push('node_modules/serverless-cloud-elements-plugin/example/**')
    service.package.exclude.push('node_modules/serverless-cloud-elements-runtime/node_modules/**')

    if (this.options.checkpoints !== false) {
      this.prepCheckpoints(service, provider, resources, functions, modules)
    }

    // Once processed, the resources with Cloud Elements types should be removed as they're not valid
    const ceResources = Object.keys(resources).filter(key => resources[key].Type.startsWith('CE::'));
    for (let ceResource of ceResources) {
      delete resources[ceResource];
    }

    // Generate the configurator (which provides type information for autocompletion) and
    // the wrapper (which handles exceptions thrown by the handler)
    const template = fs.readFileSync(__dirname + '/configurator.mustache', 'utf8');
    const view = {
      baseUrl: accountProperties.baseUrl,
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
      this.serverless.cli.log(diagnostic);
    }
    fs.writeFileSync(process.cwd() + '/configurator.ts', configurator);
    fs.writeFileSync(process.cwd() + '/configurator.js', tsCompilerOutput.outputText);
    fs.writeFileSync(process.cwd() + '/wrapper.js', wrapper);
  }

  async afterDeploy() {
    const provider = this.serverless.getProvider(this.serverless.service.provider.name);
    const stage = this.options.stage || this.serverless.service.provider.stage;
    const response = await provider.request('CloudFormation', 'describeStacks', {StackName: provider.naming.getStackName(stage)});
    const output = response.Stacks[0].Outputs.find(output => output.OutputKey === 'ServiceEndpoint');
    if (!output) {
      return
    }
    const endpoint = output.OutputValue
    const functions = this.serverless.service.functions
    for (let key of Object.keys(functions)) {
      for (let event of functions[key].events) {
        // if event.http.id is set, then that means this was originally an instance event so the callback should be set
        if (event.http && event.http.id) {
          this.serverless.cli.log(`setting instance ${event.http.id} callback url to ${endpoint}/${event.http.path}`);
          await this.platform.updateInstanceById(event.http.id, {
            configuration: {
              'event.notification.callback.url': `${endpoint}/${event.http.path}`,
              'event.notification.enabled': 'true'
            }
          });
        }
      }
    }
  }
}


module.exports = ServerlessPlugin;
