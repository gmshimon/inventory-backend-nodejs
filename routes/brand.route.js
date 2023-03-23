const express = require('express');
const router = express.Router();
const brandController = require('../Controller/brand.controller')

router.route('/').get(brandController.postBrand)