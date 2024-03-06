import React, { useEffect } from 'react';

interface ListDataProps {
    user_id: number;
}

const handleQuery = async (user_id: number) => {
    
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

const QueryDB: React.FC<ListDataProps> = ({ user_id }) => {
    useEffect(() => {
        if (user_id) {
            handleQuery(user_id);
        }
    }, [user_id]);


    return null;
};

export default QueryDB;
