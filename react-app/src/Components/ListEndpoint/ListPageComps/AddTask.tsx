    import React from 'react';

    interface AddTaskFormProps {
        listName: string;
        setList: React.Dispatch<React.SetStateAction<string[]>>;
    }
    
    const addTask = async (listName: string, setList: React.Dispatch<React.SetStateAction<string[]>>) => {
        const description = window.prompt('Enter task description:');
        const user_id = localStorage.getItem('user_id');

        if (description && user_id) {
            const response = await fetch('http://localhost:3300/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id, description, list_name: listName })
                
            });

            if (response.ok) {
                setList((prevList) => [...prevList, description]);

            } else {
                console.error('Failed to add task:', response.statusText);
            }
        }
    };

    const AddTaskForm: React.FC<AddTaskFormProps> = ({listName, setList}) => {
        return (
            <button className="card-body add-task" onClick={()=>addTask(listName, setList)}> <b>+</b> </button>
        );
    };

    export default AddTaskForm;
