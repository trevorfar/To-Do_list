import React, { useEffect } from 'react';

import useTaskList from './UseTaskList';
import AddTaskForm from './AddTask';

interface TaskListProps {
    delTask: (index: number, item: string) => void;
    listName: string;
    list: string[];
}

const TaskList: React.FC<TaskListProps> = ({list, listName}) => {
    //HERE

    const { handleClick, delTask } = useTaskList(listName);

    useEffect(() => {   
        console.log('Updated List:', listName, list);
    }, [listName, list]);

    return (
        <div className="card">
            <h1>{listName}</h1>
            {list.length === 0 ? <li className="card-body"><div className="task-content">No tasks added</div></li> : null}
            {list.map((item, index) => (
                <li key={`item-${index}`} className="card-body">
                    <div className="task-content">{item}</div>
                    <div className="delete-container">
                        <button className="delete" onClick={() => delTask(index, item)}>-</button>
                    </div>
                </li>
            ))}
            <AddTaskForm listName={listName} handleClick={handleClick} />
        </div>
    );
};
export default TaskList;
