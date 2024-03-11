import React from 'react';

const TaskInput: React.FC = () => {
    const handleClick = async () => {
        const user_id = localStorage.getItem('user_id');
        const description = window.prompt('Enter task description:');
        const list_name = window.prompt('Enter list name to add to')

        if (description && user_id && list_name) {
            const response = await fetch('http://localhost:3300/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, description, list_name })
            });
            if (response.ok) {
                console.log('Task added successfully!');
            } else {
                console.error('Failed to add task:', response.statusText);
            }
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Add Task</button>
        </div>
    );
};

export default TaskInput;
