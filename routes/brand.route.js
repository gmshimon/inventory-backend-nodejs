const express = require('express');
const router = express.Router();
const brandController = require('../Controller/brand.controller')

router.route('/')
.post(brandController.postBrand)
.get(brandController.getBrand)

router.route('/:id').get(brandController.getBrandDetails)

module.exports = router