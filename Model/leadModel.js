const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Qualified', 'Converted', 'Dropped'],
    default: 'New',
  },
  conversionDate: {
    type: Date,
  },
  notes: {
    type: String,
    example: 'Want to schedule a meeting',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  communicationHistory: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      message: String,
      type: {
        type: String,
        enum: ['Call', 'Email', 'SMS', 'Meeting'],
      },
    },
  ],
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
