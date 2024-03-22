const express = require('express');
const router = express.Router();
const managerController = require('../controllers/ManagerController');

// Route for registering a new manager
router.post('/register', managerController.addManager);

// Route for logging in a manager
router.post('/login', managerController.login);

// Route for getting information about a manager by its ID
router.get('/:id', managerController.getManagerById);

// Route for updating a manager by its ID
router.put('/:id', managerController.updateManagerById);

// Route for deleting a manager by its ID
router.delete('/:id', managerController.deleteManagerById);

// Route for getting all managers
router.get('/', managerController.getAllManagers);

module.exports = router;
