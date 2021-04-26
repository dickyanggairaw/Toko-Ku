require('dotenv').config()


const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

const cors = require('cors')

const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const connectDatabase = require('./config')

connectDatabase()

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log("app listen to port " + PORT)
})