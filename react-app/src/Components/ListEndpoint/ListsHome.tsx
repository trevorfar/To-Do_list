import React, { useState, useEffect } from 'react'
import ListPage from './ListPage';

const ListsHome: React.FC = () => { 
    const [lists, setLists] = useState<string[]>([]); // State to store the lists array
    // const [state, setState] = useState(0);
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
            console.log(typeof responseData);

            setLists(responseData.listNames)
        } else {
            console.error('Failed to query:', response.statusText);
        }
    }
    useEffect(()=>{
        queryList();
    }, [])


    return (
        <>
            <ListPage listName={lists[Number(localStorage.getItem('index'))||0]} lists={lists} />
        </>
    )
}

export default ListsHome;
