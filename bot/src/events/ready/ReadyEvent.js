const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
    client.abchlog = await client.channels.fetch("1001868631539", true, true)
    console.log(client.abchlog)
  }
}
