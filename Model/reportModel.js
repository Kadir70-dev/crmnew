const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Sales', 'Customer', 'Analytics'],
    required: true,
  },
  data: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true,
  },
  generatedAt: {
    type: Date,
    default: Date.now,
  },
  filters: {
    type: Map,
    of: String,
    description: 'Filters applied to generate the report',
    
  },
  createdBy: {
    type: String,  // Can be a user ID or email
    required: true,
  },
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
