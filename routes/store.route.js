const express = require('express');
const router = express.Router();
const storeController = require('../Controller/store.controller');

router.route('/').post(storeController.postStore)

module.exports = router