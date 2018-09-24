const {configurator} = require('./configurator');

async function eventHandler() {
  const {trigger, config, done} = configurator(arguments);
  for (let event of trigger.events) {
    const myContact = await config.sfdc.getObjectNameByObjectId_myContact(event.objectId).run();
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

module.exports.eventHandler = eventHandler;
