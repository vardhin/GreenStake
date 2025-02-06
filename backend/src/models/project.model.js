const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['SOLAR', 'REFORESTATION', 'WIND'],
    required: true
  },
  location: {
    country: {
      type: String,
      required: true
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  fundingGoal: {
    type: Number,
    required: true
  },
  currentFunding: {
    type: Number,
    default: 0
  },
  expectedCarbonCredits: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['FUNDING', 'ACTIVE', 'COMPLETED'],
    default: 'FUNDING'
  },
  timeline: {
    startDate: Date,
    estimatedCompletion: Date
  },
  documents: [{
    title: String,
    url: String,
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);