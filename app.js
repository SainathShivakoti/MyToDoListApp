const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON

// Import routes
const taskRoutes = require('./routes/tasks');

// Use routes
app.use('/api/tasks', taskRoutes); // Mount task routes at /api/tasks

// Sample route
app.get('/', (req, res) => {
  res.send('Task Management System API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});