const express = require('express');
const client  = require('./server');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

app.listen(3300, () => {
    client.connect((err) => {
        if (err) {
            console.error('Error connecting to PostgreSQL:', err.stack);
            return;
        }
        console.log("Server is now listening at port 3300");
    });
});

app.post('/tasks', (req, res) => {
    const { description } = req.body;
    client.query(`INSERT INTO tasks (description) VALUES ($1)`, [description], (err, result) => {
        if (err) {
            console.error('Error inserting task:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send('Task added successfully');
    });
});

app.post('/addTask', (req, res) => {
    const { user_id, description } = req.body;

    //Incrementing task order 
    client.query('SELECT MAX(task_order) AS max-Order FROM tasks WHERE user_id=$1', [user_id], (err, result) => {
        if(err) {
            console.error('Error getting maximum task order:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

        const maxOrder = result.rows[0].max_order || 0;
        const taskOrder = maxOrder + 1;
    })

    client.query(`INSERT INTO tasks (user_id, task_order, task_description) VALUES ($1, $2, $3)`, [user_id, task_order, description], (err, result) => {
        if (err) {
            console.error('Error inserting task:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send('Task added successfully');
    });
    });


