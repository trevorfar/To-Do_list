import React, { useState, useEffect } from 'react';


const ListInput: React.FC = () => {
    const [state, setState] = useState(0)
    useEffect(()=>{
        console.log(state);
    }, [state])

    

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
                console.log('List added successfully!');
                const responseData = await response.json();
                console.log('Response Data:', responseData);
                setState(state + 1);
                console.log(state);
            } else {
                console.error('Failed to add List:', response.statusText);
            }
        }

    };



    return (
        <div>
            <button onClick={handleClick}>Add List</button>
            <button onClick={() => setState(state+1)}>State</button>;
        </div>
    );
};

export default ListInput;
