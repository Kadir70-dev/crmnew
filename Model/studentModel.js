
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Interested', 'Enrolled', 'Dropped'],
    default: 'Interested',
    
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

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
