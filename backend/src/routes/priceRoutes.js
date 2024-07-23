const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');

// Route to get the most recent 20 prices for a symbol
router.get('/:symbol', priceController.getPrices);

module.exports = router;
