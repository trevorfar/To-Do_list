import React, { useState, useEffect } from 'react'
import ListPage from './ListPage';

interface ListsHomeProps{
prop?: number;
}

const ListsHome: React.FC<ListsHomeProps> = () => { 
    const [lists, setLists] = useState<string[]>([]); // State to store the lists array
    const user_id = localStorage.getItem('user_id');
    useEffect(()=>{
        const queryList = async () => {
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
              queryList();
    }, [])
    
    
return (
<>
            {/* {lists.map((listName, index) => ( */}

                <ListPage listName={lists[0]} lists={lists} />
             {/* ))} */}
</>
)

}

export default ListsHome