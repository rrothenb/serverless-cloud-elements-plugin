const {configurator} = require('./configurator');

async function eventHandler() {
  const {trigger, source, dest} = await configurator(arguments);
  $checkpoint('eventReceived');
  for (let event of trigger.events) {
    const myContact = await source.getMyContactById(event.objectId);
    if (myContact.Email) {
      const foundContacts = await dest.getByObjectName('myContact').where(`Email='${myContact.Email}'`);
      if (foundContacts.length === 1) {
        await dest.replaceObjectNameByObjectId('myContact', foundContacts[0].Id, myContact);
        console.log(`${foundContacts[0].Id} updated`);
      } else {
        const newContact = await dest.createByObjectName('myContact', myContact);
        console.log(`${newContact.Id} created`);
      }
    }
  }
}

module.exports.eventHandler = eventHandler;
