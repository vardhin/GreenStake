const Transaction = require('../models/transaction.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');

const transactionController = {
  async createTransaction(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const { toUserId, amount, price, projectId, type } = req.body;
      const fromUserId = req.user.userId;

      // Verify sender has enough credits
      const sender = await User.findById(fromUserId);
      if (sender.carbonCreditsBalance < amount) {
        throw new Error('Insufficient carbon credits');
      }

      const transaction = new Transaction({
        fromUserId,
        toUserId,
        amount,
        price,
        projectId,
        type,
        status: 'PENDING'
      });

      await transaction.save({ session });

      // Update user balances
      await User.findByIdAndUpdate(fromUserId, 
        { $inc: { carbonCreditsBalance: -amount } },
        { session }
      );
      
      await User.findByIdAndUpdate(toUserId,
        { $inc: { carbonCreditsBalance: amount } },
        { session }
      );

      transaction.status = 'COMPLETED';
      await transaction.save({ session });

      await session.commitTransaction();
      res.status(201).json(transaction);
    } catch (error) {
      await session.abortTransaction();
      res.status(500).json({ error: error.message });
    } finally {
      session.endSession();
    }
  },

  async getUserTransactions(req, res) {
    try {
      const userId = req.user.userId;
      const transactions = await Transaction.find({
        $or: [{ fromUserId: userId }, { toUserId: userId }]
      })
        .populate('fromUserId', 'name email')
        .populate('toUserId', 'name email')
        .populate('projectId', 'title')
        .sort({ createdAt: -1 });

      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = transactionController;