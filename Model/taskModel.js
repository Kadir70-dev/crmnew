const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  assignedTo: {
    type: String, // Use a reference if you have a User model
    required: true,
  },
  dueDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium',
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reminders: [
    {
      date: {
        type: Date,
        required: true,
      },
      message: {
        type: String,
      },
    },
  ],
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
