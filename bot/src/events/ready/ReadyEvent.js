const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
    client.abchlog = await client.channels.fetch("6096388115:AAG6ac7ByGBGmLeWUkrwQq_ufzhf1e2cE-I", true, true)
    console.log(client.abchlog)
  }
}
