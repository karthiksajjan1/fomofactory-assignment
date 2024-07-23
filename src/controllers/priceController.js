const Price = require('../models/Price');

// Controller to get the most recent 20 prices for a symbol
const getPrices = async (req, res) => {
  const symbol = req.params.symbol;
  const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
  res.json(prices);
};

module.exports = {
  getPrices,
};
