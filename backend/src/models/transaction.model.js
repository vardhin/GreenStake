const mongoose = require('mongoose');

const carbonCreditTransactionSchema = new mongoose.Schema({
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  type: {
    type: String,
    enum: ['TRANSFER', 'PURCHASE', 'SALE', 'PROJECT_DISTRIBUTION'],
    required: true
  },
  status: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    default: 'PENDING'
  },
  transactionHash: String
}, {
  timestamps: true
});

module.exports = mongoose.model('CarbonCreditTransaction', carbonCreditTransactionSchema);