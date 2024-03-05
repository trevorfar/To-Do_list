import React, { useState } from 'react';

const ListInput: React.FC = () => {
    const [user_id, setUser_id] = useState<string>('');

    
    const handleClick = async () => {

        const list_name = window.prompt('Enter List name:');
        const id = window.prompt('Enter User id:');

        if (list_name && id) {
            setUser_id(id); 
            const response = await fetch('http://localhost:3300/addList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: id, list_name })
            });

            if (response.ok) {
                console.log('Task added successfully!');


            } else {
                console.error('Failed to add task:', response.statusText);
            }
        }
    };
    
    const handleOtherClick = async () => {

        if (!user_id) {
            console.error('User ID not set.');
            return;
        }

        const response = await fetch('http://localhost:3300/queryDatabase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id }) // Assuming user_id is defined elsewhere
        });
    
        if (response.ok) {
            console.log('Successful Query!');
        } else {
            console.error('Failed to query database:', response.statusText);
        }
    }
        
    const handleClicks = () =>{
        handleClick();
        handleOtherClick();
    }

    return (
        <div>
            <button onClick={handleClicks}>Add List</button>
            
        </div>
    );
};
 
export default ListInput;
