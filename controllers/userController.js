const { User } = require('../models')
const { verifyPassword, hashPassword } = require('../helpers/passwordHandler')
const { getToken } = require('../helpers/jsonHandler')

class Controller {
  static async login (req, res, next) {
    try {
      const user = await User.find({
        username: req.body.username
      })
      if(user) {
        if(verifyPassword(req.body.password, user[0].password)) {
          const access_token = getToken({
            username: user[0].username,
            _id: user[0]._id
          })
          res.status(200).json({
            access_token: access_token,
            role: user[0].role
          })
        }
      }  
    } catch (error) {
      next(error)
    }    
  }
  static async changePassword(req, res, next) {
    try {
      const newPassword = hashPassword(req.body.password)
      const user = await User.updateOne({
        _id: req.currentUser._id
      },{
        $set: {
          password: newPassword
        }
      })
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller