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
  static async addStockProduct( req, res, next ) {
    try {
      const product = await Product.findById({
        _id: req.params.id
      })
      const newStock = product.stock + +req.body.stock
      const updateStock = await Product.updateOne({
        _id: req.params.id
      }, {
        $set: {
          stock: newStock
        }
      })
      res.status(200).json({
        message: `success add stock ${product.title}`
      })
    } catch (error) {
      next(error)
    }
  } 
}

module.exports = Controller