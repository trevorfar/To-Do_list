import React, { useState, useEffect } from 'react'
import ListPage from './ListPage';
import Empty from './AddList'

const ListsHome: React.FC = () => { 
    const [lists, setLists] = useState<string[]>([]);
    
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
            if(responseData.listNames == ""){
                console.log("EMPTY");
            }
            setLists(responseData.listNames)
        } else {
            console.error('Failed to query:', response.statusText);
        }
    }
    useEffect(()=>{
        queryList();
    }, [])

    if (lists.length === 0) {
        return <Empty setList={setLists}/>; 
    }


    return (
        <>
            
        <ListPage listName={lists[Number(localStorage.getItem('index')) || 0]} lists={lists} />
    
        </>
    )
}

export default ListsHome;
