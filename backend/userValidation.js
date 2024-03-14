// userController.js
const client = require('./get');


async function findUserByUsername(username) {
    const query = 'SELECT id, username, password FROM users WHERE username = $1';
    const values = [username];
    const result = await client.query(query, values);
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
