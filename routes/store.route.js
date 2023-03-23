const express = require('express');
const router = express.Router();
const storeController = require('../Controller/store.controller');

router.route('/')
.post(storeController.postStore)
.get(storeController.getStore)

router.route('/:id').get(storeController.getStoreDetails)

module.exports = router