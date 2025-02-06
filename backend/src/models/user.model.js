const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['ENTERPRISE', 'INDIVIDUAL'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  walletAddress: {
    type: String,
    unique: true,
    sparse: true
  },
  carbonCreditsBalance: {
    type: Number,
    default: 0
  },
  companyDetails: {
    registrationNumber: String,
    companySize: String,
    industry: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
