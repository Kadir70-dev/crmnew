const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  clientName: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  stage: {
    type: String,
    enum: ['Lead', 'Negotiation', 'Contract', 'Closed-Won', 'Closed-Lost'],
    default: 'Lead',
    
  },
  expectedCloseDate: {
    type: Date,
  },
  actualCloseDate: {
    type: Date,
  },
  probability: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  communicationHistory: [
    {
      date: {
        type: Date,
        required: true,
      },
      message: {
        type: String,
      },
      type: {
        type: String,
        enum: ['Call', 'Email', 'Meeting'],
      },
    },
  ],
});

const Deal = mongoose.model('Deal', dealSchema);
module.exports = Deal;
