const express = require('express')
const router = express.Router()
const { HistoryController } = require('../controllers')

router.post('/', HistoryController.createHistory)
router.post('/month', HistoryController.getAllHistory)

module.exports = router