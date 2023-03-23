const express = require('express');
const router = express.Router();
const brandController = require('../Controller/brand.controller')

router.route('/').post(brandController.postBrand).get(brandController.getBrand)

module.exports = router