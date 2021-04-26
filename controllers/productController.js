const { Product } = require('../models')

class Controller {
  static async getAllProduct( req, res, next ) {
    try {
      const products = await Product.find({})
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  }
  static async createProduct ( req, res, next ) {
    try {
      const newProduct = await Product.create(req.body)
      res.status(201).json(newProduct)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller