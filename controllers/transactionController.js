const { Transaction, Product } = require('../models')

class Controller {
  static async createTransaction (req, res, next) {
    try {
      const product = await Product.findById({
        _id: req.body.id
      })
      const transaction = await Transaction.create({
        title: product.title,
        type: product.type,
        description: product.description,
        harga_modal: product.harga_modal,
        harga_jual: product.harga_jual
      })

      if(product.type !== "pulsa") {
        const newStock = product.stock - 1
        await Product.updateOne({
          _id: req.body.id
        }, {
          $set: {
            stock: newStock
          }
        })
      }
      res.status(201).json(transaction)
    } catch (error) {
      next(error)
    }
  }
  static async getAllTransaction (req, res, next) {
    try {
      const transactions = await Transaction.find({})
      res.status(200).json(transactions)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller