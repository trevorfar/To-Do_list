import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListPage: React.FC = () => {
  const { listName } = useParams<{ listName: string }>();

  useEffect(() => {
  const fetchData = async () => {

        const response = await fetch('http://localhost:3300/queryTasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ list_name: listName })
        });

        if (response.ok) {
            console.log('Task Achieved successfully!');
            const responseData = await response.json();
            console.log('Response Data:', responseData);
            } else {
            console.error('Failed to query:', response.statusText);
        }
    }
    fetchData();
}, []);
 
  return (
    <h1>You are currently viewing the {listName} list. </h1>
  );
};
export default ListPage;
