const mongoose = require('mongoose');

const triggerSchema = new mongoose.Schema({
  eventType: {
    type: String,
    enum: ['leadStatusChange', 'dealStageChange', 'taskDueDate'],
    required: true
  },
  conditions: {
    type: Object, // Store conditions as a JSON object
    required: true
  },
  actions: [
    {
      type: String,
      enum: ['sendEmail', 'sendSMS', 'createTask'],
      required: true
    }
  ]
});

const workflowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  triggers: [triggerSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Workflow', workflowSchema);
