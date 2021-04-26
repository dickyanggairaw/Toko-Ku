const { Schema, model, ObjectId } = require('mongoose')

const transactionSchema = Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  harga_modal: {
    type: Number,
    required: true
  },
  harga_jual: {
    type: Number,
    required: true
  }
})

module.exports = model("Transaction", transactionSchema)