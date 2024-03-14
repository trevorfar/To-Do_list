import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DeleteListButtonProps {
    listName: string ;

}

const delList = async (list_name: string, navigate: (path: string) => void) => {
    const consent = window.confirm("Are you sure you want to delete this list?");
    const user_id = localStorage.getItem('user_id');
    
    if (user_id && list_name && consent) {
        const response = await fetch('http://localhost:3300/delList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id, list_name })
        });
        if (response.ok) {
            console.log('list removed successfully!');
            navigate('/');

        } else {
            console.error('Failed to remove list:', response.statusText);
        }   
    }
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ listName = "" }) => {
    const navigate = useNavigate();
    return (
        <button className="delete" onClick={() => delList(listName, navigate)}> <p>Delete list</p> </button>
    );
};

export default DeleteListButton;
