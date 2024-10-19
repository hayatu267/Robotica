// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize dotenv to load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.json());  // For parsing JSON data

// Example of a simple route
app.get('/', (req, res) => {
    res.send('Welcome to Robotica Website Backend!');
});

// Import route files (Ensure paths are correct)
const authRoutes = require('./routes/auth');

// Use routes
app.use('/auth', authRoutes); // This handles authentication routes

// Set up a MongoDB connection (Replace with your MongoDB URL in .env)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('MongoDB connection error:', err);
});

// Start the server on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
