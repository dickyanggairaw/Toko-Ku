const { Schema, model, ObjectId } = require('mongoose')

const { hashPassword } = require('../helpers/passwordHandler')

const userSchema = Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

userSchema.pre("save", function(next) {
  if(this.password.length < 15) {
    this.password = hashPassword(this.password)
  }
})

module.exports = model("User", userSchema)