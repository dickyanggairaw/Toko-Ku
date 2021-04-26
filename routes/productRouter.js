const express = require('express')
const router = express.Router()
const { ProductController } = require('../controllers')

router.get('/', ProductController.getAllProduct)
router.post('/', ProductController.createProduct)
router.post('/:id', ProductController.addStockProduct)
module.exports = router