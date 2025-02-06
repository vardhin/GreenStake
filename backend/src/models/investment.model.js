const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  expectedCarbonCredits: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['PENDING', 'COMPLETED'],
    default: 'PENDING'
  },
  transactionHash: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Investment', investmentSchema);