const { Schema, model, ObjectId} = require('mongoose')

const historySchema = Schema({
  transactions: [
    Object
  ],
  total: {
    type: Number,
    required: true
  },
  tanggal: {
    type: Date,
    required: true
  },
  total_modal:{
    type: Number,
    required: true
  },
  laba: {
    type: Number,
    required: true
  }
})

module.exports = model("History", historySchema)