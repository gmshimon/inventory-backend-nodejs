const express = require('express');
const router = express.Router();
const supplierController = require('../Controller/supplier.controller');

router.route('/').post(supplierController.postSupplier)

module.exports = router