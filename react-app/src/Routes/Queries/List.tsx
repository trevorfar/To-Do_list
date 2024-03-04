import React from 'react'

const ListInput: React.FC = () => {

    const handleClick = async () => {

        const list_name = window.prompt('Enter List name:');
        const user_id = window.prompt('Enter User id:');

        if (list_name && user_id) {
            const response = await fetch('http://localhost:3300/addList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, list_name })
            });

            if (response.ok) {
                console.log('Task added successfully!');
                //Call NavBar updater 

            } else {
                console.error('Failed to add task:', response.statusText);
            }
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Add List</button>
        </div>
    );
};

export default ListInput;
