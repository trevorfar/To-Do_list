import React from 'react';

interface DeleteListButtonProps {
    listName: string ;
    setList: React.Dispatch<React.SetStateAction<string[]>>;

}

const delList = async (list_name: string) => {
    const user_id = localStorage.getItem('user_id');
    
    if (user_id && list_name) {
        const response = await fetch('http://localhost:3300/delList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id, list_name })
        });
        if (response.ok) {
            console.log('list removed successfully!');
            setTaskState(prevState => ({
                ...prevState,
                listDeleted: true
            }));
            // return <Redirect to="/Home" />;
        } else {
            console.error('Failed to remove list:', response.statusText);
            setTaskState(prevState => ({
                ...prevState,
                listDeleted: false
            }));
        }   
    }
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ listName = "", delList }) => {
    return (
        <button className="card-body del-task" onClick={() => delList(listName)}> <p>Delete list</p> </button>
    );
};

export default DeleteListButton;
