const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const priceRoutes = require('./routes/priceRoutes');
require('./utils/cronJobs'); // To start the cron job

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crypto');

app.use('/api/prices', priceRoutes);

module.exports = app;
