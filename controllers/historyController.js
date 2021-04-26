const { History, Transaction } = require('../models')

class Controller {
  static async createHistory(req, res, next) {
    try {
      const dataTransactions = await Transaction.find()
      const newHistory = {
        transactions: dataTransactions,
        total: req.body.total,
        tanggal: new Date(),
        total_modal: req.body.total_modal,
        laba: req.body.laba
      }
      const history = await History.create(newHistory)
      await Transaction.deleteMany()
      res.status(201).json(history)
    } catch (error) {
      next(error)
    }
    
  }
  static async getAllHistory(req, res, next) {
    try {
      const histories = await History.find({tanggal: { $gte: req.body.start, $lte: req.body.end }})
      // console.log(histories)
      res.status(200).json(histories)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller