const express = require('express')
const router = express.Router()
const { TransactionController } = require('../controllers')
const { authorizeAdmin } = require('../middlewares/auth')

router.get('/', TransactionController.getAllTransaction)
router.post('/', authorizeAdmin, TransactionController.createTransaction)

module.exports = router