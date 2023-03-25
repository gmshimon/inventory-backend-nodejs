const express = require('express')
const router = express.Router();
const productController = require('../Controller/product.controller');
const uploader = require("../middleware/fileUpload/uploader")


router.route('/')
.post(productController.postProduct)
.get(productController.getProducts)
router.post('/fileUpload',uploader.single("image"),productController.fileUpload)

module.exports = router;