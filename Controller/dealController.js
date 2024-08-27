const Deal = require('../Model/dealModel');

// Create a new deal
exports.createDeal = async (req, res) => {
  try {
    const deal = new Deal(req.body);
    await deal.save();
    res.status(201).json(deal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all deals
exports.getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a deal by ID
exports.getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ message: 'Deal not found' });
    res.status(200).json(deal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a deal by ID
exports.updateDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!deal) return res.status(404).json({ message: 'Deal not found' });
    res.status(200).json(deal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a deal by ID
exports.deleteDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndDelete(req.params.id);
    if (!deal) return res.status(404).json({ message: 'Deal not found' });
    res.status(200).json({ message: 'Deal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
