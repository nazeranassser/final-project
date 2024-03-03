const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/:userId', UserController.getUserProfile);
router.put('/:userId', UserController.updateUserProfile);

module.exports = router;