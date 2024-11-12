const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');

const app = express();

dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', tasksRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/auth', authRouter);

module.exports = app; // Exporting app without calling listen