const express = require('express');
const router = express.Router();
const userController = require('../Controller/user.controller');
const verifyToken = require('../middleware/verifyToken');

router.route('/signup').post(userController.postUser);
router.route('/getallUsers').get(userController.getAllUsers);
router.route('/login').post(userController.loginUser);
router.route('/me').get(verifyToken,userController.getMe)

module.exports = router;