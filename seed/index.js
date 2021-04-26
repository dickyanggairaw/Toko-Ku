const connectDatabase = require('../config')
const fs = require('fs')
const { hashPassword } = require('../helpers/passwordHandler')
const { User } = require('../models')

const users = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))

users.forEach(user => {
  console.log(user)
  const newPassword = hashPassword(user.password)
  user.password = newPassword
})

function seedUser() {
  User.insertMany(users)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

connectDatabase()
seedUser()
// console.log(hashPassword("riodicky"))