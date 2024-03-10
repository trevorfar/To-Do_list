import React from 'react';

interface DeleteListButtonProps {
    listName: string ;
    delList: (listName: string) => void;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ listName = "", delList }) => {
    return (
        <button className="card-body del-task" onClick={() => delList(listName)}> <p>Delete list</p> </button>
    );
};

export default DeleteListButton;
