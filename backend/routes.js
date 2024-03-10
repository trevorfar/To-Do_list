const express = require('express');
const client = require('./get');
const router = express.Router();


router.post('/addTask', (req, res) => {
    const { user_id, description, list_name } = req.body;
    
        client.query(`INSERT INTO tasks (user_id, list_name, task_description) VALUES ($1, $2, $3)`, [user_id, list_name, description], (err, result) => {
            if (err) {
                console.error('Error inserting task:', err.stack);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send('Task added successfully');
        });
    });


router.post('/addList', (req, res) => {
    const { user_id, list_name } = req.body;

    client.query(`INSERT INTO lists (user_id, list_name) VALUES ($1, $2)`, [user_id, list_name], (err, result) => {
        if (err) {
            console.error('Error inserting task:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }


        client.query('SELECT list_name FROM lists WHERE user_id = $1', [user_id], (err, result) => {
            if (err) {
                console.error('Error querying database:', err.stack);
                res.status(500).send('Internal Server Error');
                return;
            }

            const listNames = result.rows.map(row => row.list_name);
            res.json({ listNames });
        });
    });
});

router.post('/delTask', (req, res) =>{
    const { user_id, item } = req.body;
    client.query('DELETE FROM tasks WHERE user_id =$1 AND task_description = $2', [user_id, item], (err, result) =>{
        if (err) {
            console.error('Error deleting task', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        else {
            res.send('Task deleted successfully');
        }
    })

})
router.post('/delList', (req, res) =>{
    const { user_id, list_name } = req.body;
    console.log(list_name);
    client.query('DELETE FROM lists WHERE user_id = $1 AND list_name = $2', [user_id, list_name], (err, result) =>{
        if (err) {
            console.error('Error deleting task', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        else {
            res.send('Task deleted successfully');
        }
    })

})
router.post('/queryTasks', (req, res) => {
    const { list_name } = req.body;
    client.query('SELECT task_description FROM tasks WHERE list_name = $1', [list_name], (err, result) => {
        if (err) {
            console.error('Error querying database:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

        const tasks = result.rows.map(row => row.task_description);
        res.json({ tasks });
    });

});

router.post('/queryList', (req, res) => {
    const { user_id } = req.body;

    client.query('SELECT list_name FROM lists WHERE user_id = $1', [user_id], (err, result) => {
        if (err) {
            console.error('Error querying database:', err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }

        const listNames = result.rows.map(row => row.list_name);
        res.json({ listNames });
    });
});




module.exports = router;