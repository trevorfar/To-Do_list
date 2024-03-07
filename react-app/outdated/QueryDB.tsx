import React, { useEffect, useState } from 'react';

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
            return responseData;
        } else {
            console.error('Failed to query:', response.statusText);
        }
    }
    return null;
};

const QueryDB: React.FC<ListDataProps> = ({ user_id }) => {
    const [data, setData] = useState<string[]>([]) // State to store the array data

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await handleQuery(user_id);
            if (responseData) {
                setData(responseData);
            }
        };
        fetchData();
    }, [user_id]);
    return data;
};

export default QueryDB;
