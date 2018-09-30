# Cloud Elements Serverless Framework Plugin

This is a [Serverless Framework](https://serverless.com/framework) plugin for AWS that 
adds support for [Cloud Elements](https://cloud-elements.com/), 
simplifying the invocation
of the Cloud Elements platform and element APIs and of receiving events from instances.  It depends on the
[Cloud Elements SDK Generator](https://www.npmjs.com/package/ce-sdkifier) for generation of SDKs
for the configured element resources.

## Install

First, install and configure the
[Serverless Framework using the AWS provider](https://serverless.com/framework/docs/providers/aws/guide/quick-start)

Then, run `npm install` in your Serverless project.
```
$ npm install --save-dev serverless-cloud-elements-plugin
```

and add the plugin to your `serverless.yml` file
```yml
plugins:
  - serverless-cloud-elements-plugin
```

You will also need to add a dependency for `superagent` to your `package.json` file

```
    "dependencies": {
        "superagent": "^3.8.2"
    }
```

## Setup

This plugin introduces new events and resources specific to Cloud Elements for configuration in your 
`serverless.yml` file.

### Events

This plugin introduces a new event type of `instance`.

#### Instance

This event occurs when a Cloud Elements instance generates
an event.  To configure an `instance` event, you must specify the `resource` representing the instance (see below).

```yaml
functions:
  sync:
    handler: contactSync.eventHandler
    events:
      - instance:
          resource: sfdc

```

### Resources

Three new `resource` types are introduced by the plugin.

#### Hub

You can configure a Hub resource using a `Type` of `CE::Hub::<hub key>`.  You also need to specify the id of the
instance that you wish to use.  Configuring a Hub resource will generate an SDK for the Hub API and create an
instance of it in your `config` object (see below).

```yaml
resources:
  Resources:
    dest:
      Type: CE::Hub::general
      Properties:
        id: ${env:DEST_ID}

```

#### Element

You can configure an Element resource using a `Type` of `CE::Element::<element key>`.  You also need to specify the 
id of the instance that you wish to use.  Configuring an Element resource will generate an SDK for the 
specific instance configured, including any associated Virtual Data Resources (VDRs).  It will also create an instance 
of the SDK in your `config` object.

```yaml
resources:
  Resources:
    sfdc:
      Type: CE::Element::sfdc
      Properties:
        id: ${env:SFDC_ID}

```

#### Account

You must specify one resource with a `Type` of `CE::Account`.  It provides the `baseUrl` of the desired Cloud Elements
environment (e.g., `https://staging.cloud-elements.com`) and your `orgToken` and `userToken`.

```yaml
resources:
  Resources:
    account:
      Type: CE::Account
      Properties:
        userToken: ${env:USER_TOKEN}
        orgToken: ${env:ORG_TOKEN}
        baseUrl: ${env:BASE_URL}
```

## Command

This plugin supplements the behavior of both the `package` and `deploy` commands.

### package

The behavior of the standard `serverless package` command has been enhanced to include code generation of assets used
 for accessing the Cloud Element APIs.  It will generate an `sdks` directory (if needed) and both Typescript and
 Javascript versions of our platform SDK and any elements or hubs configured as resources in your
 `serverless.yml` file.  It will also generate `configurator.js` (and `.ts`) which is used to support autocompletion
 of Cloud Elements events, API calls, parameters and results.  You should run this when your configured Cloud Elements
 resources change.

### deploy

The `serverless deploy` command has also been enhanced.  After deployment, the plugin will update the event
callback URL of any instance configured as an event source to point to the correct URL to trigger the code.

### invoke

In order to simulate a typical Cloud Elements event, the data should be formatted as shown in the example below:

    sls invoke --function sync --data '{"body":{"message":{"events":[{"objectId":"12345"}]}}}'


## Code

You provide your event handling code as a CommonJS module when developing for the Serverless Framework.  There are a 
few things to be aware of when writing a handler for Cloud Element `instance` events.

The first line of your handler should call the `configurator` to populate the objects needed to interact with
Cloud Elements

```javascript
const {trigger, config, platform, done} = configurator(arguments);
```

It returns several potentially useful objects:
* `trigger` - this contains the event which triggered the execution.  The most important field of this is the `events`
array which includes the `objectId` of each changed object.
* `config` - this contains SDK instances for each Cloud Elements Element instance configured as a `resource`.
* `platform` - the Cloud Elements platform API SDK
* `done` - a callback function to indicate either successful or failed completion of the event handling.  You can 
optionally provide a status code for failed executions.  Alternatively, instead of calling done when failing, you
can throw an exception.

Any failure will cause redelivery of the event.  Processing is synchronous and a failure causes up to nine retries.  
In addition, because the invocation is synchronous, processing must complete in under 30 seconds to avoid a failure 
and subsequent retries.

# Example Project

This is an example of a contact sync integration, where changes to Salesforce contacts that have an email address
are exported to another service using a Virtual Data Resource (VDR) called `myContact`.

#### package.json
```json
{
    "dependencies": {
        "superagent": "^3.8.2"
    },
    "devDependencies": {
        "serverless-cloud-elements-plugin": "serverless-cloud-elements-plugin"
    }
}
```
#### serverless.yml
```yaml
service: salesforce-finance-contact-sync
 
provider:
  name: aws
  runtime: nodejs8.10
 
plugins:
  - serverless-cloud-elements-plugin
 
functions:
  sync:
    handler: contactSync.eventHandler
    timeout: 30
    memorySize: 256
    events:
      - instance:
          resource: sfdc
 
resources:
  Resources:
    sfdc:
      Type: CE::Element::sfdc
      Properties:
        id: ${env:SFDC_ID}
    dest:
      Type: CE::Hub::general
      Properties:
        id: ${env:DEST_ID}
    account:
      Type: CE::Account
      Properties:
        userToken: ${env:USER_TOKEN}
        orgToken: ${env:ORG_TOKEN}
        baseUrl: ${env:BASE_URL}
```
        
#### contactSync.js
```javascript
const {configurator} = require('./configurator');
 
async function eventHandler() {
  const {trigger, config, done} = configurator(arguments);
  for (let event of trigger.events) {
    const myContact = await config.sfdc.getMyContactById(event.objectId).run();
    if (myContact.Email) {
      let foundContacts = await config.dest.getByObjectName('myContact').where(`Email='${myContact.Email}'`).run();
      if (foundContacts.length === 1) {
        await config.dest.updateObjectNameByObjectId('myContact', foundContacts[0].Id, myContact).run();
        console.log(`${foundContacts[0].Id} updated`);
      } else {
        const newContact = await config.dest.createByObjectName('myContact', myContact).run();
        console.log(`${newContact.Id} created`);
      }
    }
  }
  done();
}
```