const Customer = require('../models/CustomerModel');

// Controller for handling customer-related operations
const customerController = {
  // Add a new customer
  addCustomer: async (req, res) => {
    try {
      const { customerId, customerName, customerContact, customerEmail } = req.body;
      const newCustomer = new Customer({ customerId, customerName, customerContact, customerEmail });
      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
    } catch (error) {
      console.error("Error adding customer:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Get information about a customer by its ID
  getCustomerById: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.json(customer);
    } catch (error) {
      console.error("Error getting customer by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

    // Get all customers
    getAllCustomers: async (req, res) => {
      try {
        const customers = await Customer.find();
        res.json(customers);
      } catch (error) {
        console.error("Error getting all customers:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    },
  
    // Delete a customer by its ID
    deleteCustomerById: async (req, res) => {
      try {
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
          return res.status(404).json({ message: "Customer not found" });
        }
        res.json({ message: "Customer deleted successfully" });
      } catch (error) {
        console.error("Error deleting customer by ID:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    },
  
    // Update a customer by its ID
    updateCustomerById: async (req, res) => {
      try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCustomer) {
          return res.status(404).json({ message: "Customer not found" });
        }
        res.json(updatedCustomer);
      } catch (error) {
        console.error("Error updating customer by ID:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
};

module.exports = customerController;
