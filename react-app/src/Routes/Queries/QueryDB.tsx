import React from 'react';

interface ListDataProps {
    user_id: number;
}

const queriedDB: React.FC<ListDataProps> = ({ user_id }) => {

    const handleQuery = async () => {
    
        if (user_id) {
            const response = await fetch('http://localhost:3300/queryList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id })
            });

            if (response.ok) {
                console.log('Task Queried successfully!');
                const responseData = await response.json();
                console.log('Response Data:', responseData);

            } else {
                console.error('Failed to query:', response.statusText);
            }
        }
    };

    return (
        <div>
            <button onClick={handleQuery}>Click Me </button>
        </div>
    );
};

export default queriedDB;
