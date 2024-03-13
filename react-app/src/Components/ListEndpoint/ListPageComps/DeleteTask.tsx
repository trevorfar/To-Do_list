import React from 'react';

interface DeleteTaskFormProps {
    item: string;
    index: number;
    setList: React.Dispatch<React.SetStateAction<string[]>>;
}


const delTask = async (index: number, item: string, setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    const user_id = localStorage.getItem('user_id');

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
            setList((prevList) => {
                const newList = [...prevList];
                newList.splice(index, 1); 
                return newList;
            });
        } else {
            console.error('Failed to remove task:', response.statusText);
        }
    }
}


const DeleteTaskForm: React.FC<DeleteTaskFormProps> = ({index, item, setList}) => {
    return (
        <button className="card-body del-task" onClick={()=>delTask(index, item, setList)}> <b>+</b> </button>
    );
};

export default DeleteTaskForm;
