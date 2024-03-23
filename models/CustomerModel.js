const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
  customerId: { type: String, required: true },
  customerName: { type: String, required: true },
  customerContact: { type: String, required: true },
  customerEmail: { type: String, required: true }
});

const Customer = model('Customer', customerSchema);


module.exports = Customer;

