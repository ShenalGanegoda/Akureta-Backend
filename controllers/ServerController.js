const Server = require('../models/ServerModel');

// Controller for handling server-related operations
const serverController = {
  // Add a new server
  addServer: async (req, res) => {
    try {
      const { serverId, serverName, serverContact, serverAddress } = req.body;
      const newServer = new Server({ serverId, serverName, serverContact, serverAddress });
      const savedServer = await newServer.save();
      res.status(201).json(savedServer);
    } catch (error) {
      console.error("Error adding server:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Get information about a server by its ID
  getServerById: async (req, res) => {
    try {
      const server = await Server.findById(req.params.id);
      if (!server) {
        return res.status(404).json({ message: "Server not found" });
      }
      res.json(server);
    } catch (error) {
      console.error("Error getting server by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Get all servers
  getAllServers: async (req, res) => {
    try {
      const servers = await Server.find();
      res.json(servers);
    } catch (error) {
      console.error("Error getting all servers:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Delete a server by its ID
  deleteServerById: async (req, res) => {
    try {
      const deletedServer = await Server.findByIdAndDelete(req.params.id);
      if (!deletedServer) {
        return res.status(404).json({ message: "Server not found" });
      }
      res.json({ message: "Server deleted successfully" });
    } catch (error) {
      console.error("Error deleting server by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Update a server by its ID
  updateServerById: async (req, res) => {
    try {
      const updatedServer = await Server.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedServer) {
        return res.status(404).json({ message: "Server not found" });
      }
      res.json(updatedServer);
    } catch (error) {
      console.error("Error updating server by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

module.exports = serverController;
