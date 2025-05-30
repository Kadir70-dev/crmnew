const Report = require('../Model/reportModel');

// Create a new report
exports.createReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    console.log('Report created:', report);
    res.status(201).json(report);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all reports
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    console.log('Reports retrieved:', reports);
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a report by ID
exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a report by ID
exports.updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a report by ID
exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
