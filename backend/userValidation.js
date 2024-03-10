// userController.js

const { Pool } = require('pg');
const pool = new Pool();

async function findUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    const result = await pool.query(query, values);
    return result.rows[0]; // Assuming there's only one user with this username
}



async function validateUser(username, password) {
    const user = await findUserByUsername(username);
    if (!user) {
        return null; // User not found
    }

    // Compare the passwords (assuming password is stored in plaintext for simplicity)
    if (user.password === password) {
        return user; // Passwords match, return the user object
    } else {
        return null; // Passwords don't match
    }
}

module.exports = {
    validateUser,
};
