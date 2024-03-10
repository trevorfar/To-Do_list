const jwt = require('jsonwebtoken');
require('dotenv').config();

// Secret key for JWT
const secretKey = process.env.secret_key;

// Generate a JWT token
function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
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
app.post('/login', (req, res) => {
  // Validate user credentials
  // Assuming user is an object with id and username properties
  const user = validateUser(req.body.username, req.body.password);

  if (user) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/profile', (req, res) => {
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
