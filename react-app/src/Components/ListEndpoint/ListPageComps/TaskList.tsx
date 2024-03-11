import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTaskList from './UseTaskList';
import AddTaskForm from './AddTask';

interface TaskListProps {
    list: string[];
    delTask: (index: number, item: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({list}) => {
    const { listName = "" } = useParams<{ listName: string }>() ?? { listName: "" };
    const { handleClick, delTask } = useTaskList(listName);

    useEffect(() => {   
        console.log('Updated List:', list);
    }, [list]);

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
