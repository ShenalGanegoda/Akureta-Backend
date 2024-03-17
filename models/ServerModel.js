const { Schema, model } = require('mongoose');

const serverSchema = new Schema({
  serverId: { type: String, required: true },
  serverName: { type: String, required: true },
  serverContact: { type: String, required: true },
  serverAddress: { type: String, required: true }
});

const Server = model('Server', serverSchema);




module.exports = Server;

