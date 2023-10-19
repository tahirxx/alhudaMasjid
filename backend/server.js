// backend/server.js
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;


// Middleware to parse JSON data
app.use(express.json());

// Define your MongoDB connection URI
const mongoURI = 'mongodb+srv://utahir2:aLIcwpgXlXifp9cR@cluster.uh494zh.mongodb.net/alhudamasjid';

// Connect to the MongoDB database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get a reference to the database connection
const db = mongoose.connection;

// Handle database connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Use the routes with their respective paths
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use(cors());

app.use(express.static(path.join(__dirname, 'al-hudamasjid/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'al-hudamasjid/src/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







