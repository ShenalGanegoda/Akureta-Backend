const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Manager = require('../models/ManagerModel');

const ManagerController = {
  // Add a new Manager
  addManager: async (req, res) => {
    try {
      const { managerId, managerName, managerContact, managerEmail, password } = req.body;
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
      const newManager = new Manager({ managerId, managerName, managerContact, managerEmail, password: hashedPassword });
      const savedManager = await newManager.save();
      res.status(201).json(savedManager);
    } catch (error) {
      console.error("Error adding Manager:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

 // Manager login

login: async (req, res) => {
    try {
      const { managerEmail, password } = req.body;
      // Find the manager by email
      const manager = await Manager.findOne({ managerEmail });
      if (!manager) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      // Check if the password is correct
      const passwordMatch = await bcrypt.compare(password, manager.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      // Define the JWT secret key with fallback value
      const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
      // Use the JWT secret key to sign the token
      const token = jwt.sign({ managerId: manager._id }, JWT_SECRET);
      res.json({ token });
    } catch (error) {
      console.error("Error logging in Manager:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  

}