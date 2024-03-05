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

// app.post('/tasks', (req, res) => {
//     const { description } = req.body;
//     client.query(`INSERT INTO tasks (description) VALUES ($1)`, [description], (err, result) => {
//         if (err) {
//             console.error('Error inserting task:', err.stack);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         res.send('Task added successfully');
//     });
// });


// WORKS BY INCREMENTING TASK ORDER BASED ON MAXIMUM TASKS. PLEASE NOTE, I HAVE IT HARD CODED TO WORK FOR TESTING, ONCE I IMPLEMENT USER LOGIN I WILL FIX THIS 

app.post('/addTask', (req, res) => {
    const { user_id, description } = req.body;

    //Incrementing task order 
    client.query('SELECT MAX(task_order) AS max_order FROM tasks WHERE user_id=$1', [user_id], (err, result) => {
        if(err) {
            console.error('Error getting maximum task order:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

        const maxOrder = result.rows[0].max_order || 0;
        const taskOrder = maxOrder + 1;
   

    client.query(`INSERT INTO tasks (user_id, task_order, task_description) VALUES ($1, $2, $3)`, [user_id, taskOrder, description], (err, result) => {
        if (err) {
            console.error('Error inserting task:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send('Task added successfully');
    });
    });

});

app.post('/addList', (req, res) => {
    const { user_id, list_name } = req.body;

    client.query(`INSERT INTO lists (user_id, list_name) VALUES ($1, $2)`, [user_id, list_name], (err, result) => {
        if (err) {
            console.error('Error inserting task:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

    console.log("list added correct");

    client.query('SELECT list_name FROM lists WHERE user_id = $1', [user_id], (err, result) => {
        if (err) {
            console.error('Error querying database:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

        const listNames = result.rows.map(row => row.list_name);
        console.log(listNames);
        res.json({ listNames }); 
    });
    });
});



app.post('/queryList', (req, res) => {
    const { user_id } = req.body;
    
    client.query('SELECT list_name FROM lists WHERE user_id = $1', [user_id], (err, result) => {
        if (err) {
            console.error('Error querying database:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

        const listNames = result.rows.map(row => row.list_name);
        console.log(listNames);
        res.json({ listNames }); 
    });
});

