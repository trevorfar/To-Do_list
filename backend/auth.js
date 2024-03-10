const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');
const router = express.Router();
const {validateUser } = require('./userValidation');

// Secret key for JWT
const secretKey = process.env.secret_key;

// Generate a JWT token
function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username, user_id: user.user_id }, secretKey, { expiresIn: '1h' });
}

// Verify a JWT token
function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

// Example route for login
router.post('/login', (req, res) => {
  // Validate user credentials
  // Assuming user is an object with id and username properties
  const user = validateUser(req.body.username, req.body.password);

  if (user) {
    const token = generateToken(user);
    console.log(user.user_id);
    res.json({ token, user_id: user.user_id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.get('/profile', (req, res) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
      res.json({ message: 'Authorized', user: decoded });
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
});
module.exports = router;
