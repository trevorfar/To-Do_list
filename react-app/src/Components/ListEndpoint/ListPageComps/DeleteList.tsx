import React from 'react';

interface DeleteListButtonProps {
    listName: string ;
    delList: (listName: string) => void;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ listName = "", delList }) => {
    return (
        <button className="card-body add-task" onClick={() => delList(listName)}> DELETE LIST </button>
    );
};

export default DeleteListButton;
