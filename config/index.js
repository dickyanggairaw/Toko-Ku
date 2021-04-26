const mongoose = require('mongoose')

function connectDatabase () {
  mongoose.connect('mongodb://localhost:27017/toko-ku', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("connect to mongo  DB"))
}

module.exports = connectDatabase