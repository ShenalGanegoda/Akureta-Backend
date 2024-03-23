const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

// Route for adding a new customer
router.post('/add-customers', customerController.addCustomer);

// Route for getting information about a customer by its ID
router.get('/:id', customerController.getCustomerById);

// Route for updating a customer by its ID
router.put('/:id', customerController.updateCustomerById);

// Route for deleting a customer by its ID
router.delete('/:id', customerController.deleteCustomerById);

// Route for getting all customers
router.get('/', customerController.getAllCustomers);

module.exports = router;
