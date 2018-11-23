const {configurator} = require('./configurator');

async function syncContact(myContact, dest, total) {
  const foundContacts = await dest.getByObjectName('myContact').where(`Email='${myContact.Email}'`).run();
  if (foundContacts.length === 1) {
    await dest.replaceObjectNameByObjectId('myContact', foundContacts[0].Id, myContact).run();
    console.log(`${foundContacts[0].Id} updated`);
  } else {
    const newContact = await dest.createByObjectName('myContact', myContact).run();
    console.log(`${newContact.Id} created`);
  }
}

async function eventHandler() {
  const {trigger, config} = configurator(arguments);
  for (let i = 0; i < trigger.events.length; i++) {
    const event = trigger.events[i];
    const myContact = await config.source.getMyContactById(event.objectId).run();
    if (myContact.Email) {
      await syncContact(myContact, config.dest, trigger.events.length);
    }
  }
}

module.exports.eventHandler = eventHandler;
