const express = require('express');
const router = express.Router();
const serverController = require('../controllers/ServerController');

// Route for adding a new server
router.post('/add-servers', serverController.addServer);

// Route for getting information about a server by its ID
router.get('/:id', serverController.getServerById);

// Route for updating a server by its ID
router.put('/:id', serverController.updateServerById);

// Route for deleting a server by its ID
router.delete('/:id', serverController.deleteServerById);

// Route for getting all servers
router.get('/', serverController.getAllServers);

module.exports = router;
