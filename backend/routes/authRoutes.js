const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Route for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check the password (you should use a library like bcrypt for this)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // You can generate a token for authentication here and send it back
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Error during login' });
  }
});

module.exports = router;
