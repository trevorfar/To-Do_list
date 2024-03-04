import React from 'react';

const TaskInput: React.FC = () => {
    const handleClick = async () => {
        const description = window.prompt('Enter task description:');
        if (description) {
            const response = await fetch('http://localhost:3300/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description })
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
