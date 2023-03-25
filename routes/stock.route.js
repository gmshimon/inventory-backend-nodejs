const express = require('express');
const router = express.Router();
const stockController = require('../Controller/stock.controller')

router.route('/')
.post(stockController.postStock)
.get(stockController.getStock)

module.exports = router