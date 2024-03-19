const { Schema, model } = require('mongoose');

const managerSchema = new Schema({
  managerId: { type: String, required: true },
  managerName: { type: String, required: true },
  managerContact: { type: String, required: true },
  managerEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Manager = model('Manager', managerSchema);

module.exports = Manager;
