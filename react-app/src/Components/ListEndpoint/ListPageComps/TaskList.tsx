import React, {useState, useEffect} from 'react';

import useTaskList from './UseTaskList';
import AddTaskForm from './AddTask';

interface TaskListProps {
    delTask: (index: number, item: string) => void;
    listName: string;
    list: string[];
}
const TaskList: React.FC<TaskListProps> = ({list, listName}) => {
    const [lists, setLists] = useState<string[]>([]);


    const { delTask: delTaskHook } = useTaskList(listName);
    
    useEffect(()=>{
        setLists(list);
    }, [list])



    return (
        <div className="card">
            <h1>{listName}</h1>
            {lists.length === 0 ? <li className="card-body"><div className="task-content">No tasks added</div></li> : null}
            {lists.map((item, index) => (
                <li key={`item-${index}`} className="card-body">
                    <div className="task-content">{item}</div>
                    <div className="delete-container">
                        <button className="delete" onClick={() => delTaskHook(index, item)}>-</button>
                    </div>
                </li>
            ))}
            <AddTaskForm listName={listName} setList={setLists} />
        </div>
    );
};
export default TaskList;
