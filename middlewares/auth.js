const { User } = require('../models')
const { verifyToken } = require('../helpers/jsonHandler')

async function authentication ( req, res, next ) {
  try {
    const user = verifyToken(req.headers.access_token)
    if(!user) {
      throw new Error
    }
    const userData = await User.findById({
      _id: user._id
    })
    if(userData.username == user.username) {
      req.currentUser = userData
      next()
    }else {
      throw new Error
    }
  } catch (error) {
    next(error)
  }
}

function authorizeAdmin (req, res, next) {
  try {
    if(req.currentUser.role == "admin"){
      next()
    }else{
      throw new Error
    }
  } catch (error) {
    next(error)
  }  
}

module.exports = {
  authentication,
  authorizeAdmin
}