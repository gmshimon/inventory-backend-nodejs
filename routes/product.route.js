const express = require('express')
const router = express.Router();
const productController = require('../Controller/product.controller');

router.route('/')
.post(productController.postProduct)
.get(productController.getProducts)

module.exports = router;