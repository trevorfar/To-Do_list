import React from 'react';

interface AddTaskFormProps {
    listName: string;
    handleClick: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ handleClick }) => {
    return (
        <button className="card-body add-task" onClick={handleClick}> + </button>
    );
};

export default AddTaskForm;
