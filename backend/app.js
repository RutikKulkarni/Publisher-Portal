const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const contentRoutes = require('./routes/contentRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/api/content', contentRoutes);
app.use('/api/transaction', transactionRoutes);

// MongoDB connection
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = app;
