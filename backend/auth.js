const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');
const authRouter = express.Router();
const {validateUser } = require('./userValidation');

// Secret key for JWT
const secretKey = process.env.secret_key;

// Generate a JWT token
function generateToken(user, user_id) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' }); //, 
}

// Verify a JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.id;
  } catch (error) {
    return null;
  }
}

// Example route for login
authRouter.post('/login', async(req, res) => {
  // Validate user credentials
  // Assuming user is an object with id and username properties
  const user = await validateUser(req.body.Username, req.body.Password);

  if (user) {
    const token = generateToken(user, user.id);
    res.json({ token, user_id: user.id }); //, 

  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

authRouter.get('/profile', (req, res) => {
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
module.exports = {authRouter, verifyToken};
