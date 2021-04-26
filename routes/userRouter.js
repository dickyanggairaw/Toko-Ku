const express = require('express')
const router = express.Router()
const { UserController} = require('../controllers')
const { authentication } = require('../middlewares/auth')

router.post('/login', UserController.login)
router.use(authentication)
router.post('/', UserController.changePassword)

module.exports = router