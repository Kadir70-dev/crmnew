const CalendarEvent = require('../Model/calenderEventModel');

// Create a new calendar event
exports.createEvent = async (req, res) => {
  try {
    const event = new CalendarEvent(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all calendar events
exports.getEvents = async (req, res) => {
  try {
    const events = await CalendarEvent.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a calendar event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await CalendarEvent.findById(req.params.id);
    console.log(event);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a calendar event by ID
exports.updateEvent = async (req, res) => {
  try {
    const event = await CalendarEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a calendar event by ID
exports.deleteEvent = async (req, res) => {
  try {
    const event = await CalendarEvent.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
