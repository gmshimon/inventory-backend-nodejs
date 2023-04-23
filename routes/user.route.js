const express = require('express');
const router = express.Router();
const userController = require('../Controller/user.controller');

router.route('/signup').post(userController.postUser);
router.route('/getallUsers').get(userController.getAllUsers);
router.route('/login').post(userController.loginUser);

module.exports = router;