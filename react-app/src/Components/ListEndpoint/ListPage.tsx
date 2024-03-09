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
        const description = window.prompt('Enter task description:');
        const user_id = window.prompt('Enter user_id');


        if (description && user_id) {
            const response = await fetch('http://localhost:3300/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, description, list_name: listName })
            });
            if (response.ok) {
                console.log('Task added successfully!');
                setList([...list, description]);

            } else {
                console.error('Failed to add task:', response.statusText);
            }
        }
    };
    
    const delTask = async (index: number, item: string) => {
        const user_id = window.prompt('Enter user_id');
        console.log(item);
        if (user_id && item) {
            const response = await fetch('http://localhost:3300/delTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, item })
            });
            if (response.ok) {
                console.log('Task removed successfully!');
                const newList = list.filter((_, idx) => idx !== index);
                setList(newList);
            } else {
                console.error('Failed to remove task:', response.statusText);
            }
        }
    }

    return (
        <>
            <div className="container">
                <div className="card-container">
                    <h1>Tasks</h1>
                    <div className="card">
                        {list.length === 0 ? <li className="card-body"><div className="task-content">No tasks added</div></li> : null}
                        {list.map((item, index) => (
                            <li key={`item-${index}`} className="card-body">
                                <div className="task-content">{item}</div>
                                <div className="delete-container">
                                    <button className="delete" onClick={() => delTask(index, item)}>-</button>
                                    </div>
                                    </li>
                        ))}
                        <button className="card-body add-task" onClick={handleClick}> + </button>
                    </div>
                </div>
            </div>
        </>

    );
};
export default ListPage;
