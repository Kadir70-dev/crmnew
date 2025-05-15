const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    
  },
  attendees: [
    {
      type: String,  // Can be an email or a user ID
    },
  ],
  reminder: {
    type: Date,
    description: 'Date and time for the reminder notification',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CalendarEvent = mongoose.model('CalendarEvent', calendarEventSchema);
module.exports = CalendarEvent;
