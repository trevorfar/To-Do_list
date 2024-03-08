import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css'
const ListPage: React.FC = () => {
    const { listName } = useParams<{ listName: string }>();
    const [list, setList] = useState<string[]>([]);


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
                setList(responseData.tasks);
            } else {
                console.error('Failed to query:', response.statusText);
            }
        }
        fetchData();
    }, [listName]);

    const handleClick = async () => {
        const user_id = window.prompt('Enter user_id');
        const description = window.prompt('Enter task description:');
        const list_name = listName;

        if (description && user_id) {
            const response = await fetch('http://localhost:3300/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, description, list_name })
            });
            if (response.ok) {
                console.log('Task added successfully!');
                setList([...list, description]);

            } else {
                console.error('Failed to add task:', response.statusText);
            }
        }
    };



    return (
        <>
            <div className="container">
            <div className="card-container">
            <h1>Tasks</h1>
            <div className="card">
            {list.length === 0 ? <li className="card-body">No tasks added</li> : null }
            {list.map((item, index) => (
                        <li key={`item-${index}`} className="card-body">{item}<button>-</button></li>
                    ))}
            <button className="card-body add-task" onClick={handleClick}> + </button>
            </div>
            </div>
            </div>
        </>

    );
};
export default ListPage;
