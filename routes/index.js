const express = require('express')
const router = express.Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const transactionRouter = require('./transactionRouter')
const historyRouter = require('./historyRouter')
const { authentication } = require('../middlewares/auth')

router.use('/users', userRouter)
router.use(authentication)
router.use('/products', productRouter)
router.use('/transactions', transactionRouter)
router.use('/histories', historyRouter)

module.exports = router