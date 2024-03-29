const express = require('express');
const client = require('./get');
const cors = require('cors');
const taskRoutes = require('./routes');
const { authRouter } = require('./auth'); // Import authRouter  
const login = require('./auth')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(taskRoutes);
app.use(authRouter); // Use authRouter

app.listen(3300, () => {
    client.connect((err) => {
        if (err) {
            console.error('Error connecting to PostgreSQL:', err.stack);
            return;
        }
        console.log("Server is now listening at port 3300");
    });
});



