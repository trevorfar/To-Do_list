import React, { useState } from 'react'
import ListPage from './ListPage';

const ListsHome: React.FC = () => { 
    const [lists, setLists] = useState<string[]>([]); // State to store the lists array

    const queryList = async () => {

        const user_id = localStorage.getItem('user_id');
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
                  console.log(responseData);
                  console.log(typeof responseData);
                  setLists(responseData.listNames)
                  } else {
                  console.error('Failed to query:', response.statusText);
              }
          }
    
return (
<>
<button onClick={queryList}>Query List</button>
            {lists.map((listName, index) => (
                <ListPage key={index} listName={listName} />
            ))}
</>
)

}

export default ListsHome