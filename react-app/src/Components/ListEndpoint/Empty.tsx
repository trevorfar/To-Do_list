import React, {useEffect} from 'react';
const Empty: React.FC = () => { 

    const addList = async() =>{
        const list_name = window.prompt('Enter List Name:');
        const user_id = localStorage.getItem('user_id');

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
                console.log(response);
            } else {
                console.error('Failed to add task:', response.statusText);
            }
        }
    };


   


    return (<>
    <button onClick={addList}>Create List</button>
    </>)
}

export default Empty