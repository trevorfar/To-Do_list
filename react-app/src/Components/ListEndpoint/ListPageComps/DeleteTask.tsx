import React from 'react';

interface DeleteTaskFormProps {
    list_name: string;
    index: number;
    setList: React.Dispatch<React.SetStateAction<string[]>>;
}


const delTask = async (index: number, list_name: string) => {
    const user_id = localStorage.getItem('user_id');

    if (user_id && list_name) {
        const response = await fetch('http://localhost:3300/delTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id, list_name })
        });
        if (response.ok) {
            console.log('Task removed successfully!');
        } else {
            console.error('Failed to remove task:', response.statusText);
        }
    }
}


const DeleteTaskForm: React.FC<DeleteTaskFormProps> = ({index, setList}) => {
    return (
        <button className="card-body add-task" onClick={()=>delTask(index, setList)}> <b>+</b> </button>
    );
};

export default DeleteTaskForm;
