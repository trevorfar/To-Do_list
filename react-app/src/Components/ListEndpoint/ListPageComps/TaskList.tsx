import React, {useState, useEffect} from 'react';

import useTaskList from './UseTaskList';
import AddTaskForm from './AddTask';

interface TaskListProps {
    delTask: (index: number, item: string) => void;
    listName: string;
    list: string[];
}
const TaskList: React.FC<TaskListProps> = ({list, listName}) => {
    const [state, setState] = useState<string>("");
    const { delTask: delTaskHook } = useTaskList(listName);
    
    useEffect(()=>{
        setState(listName);
        console.log("CURR:" + state);
    }, [listName, state])

    function click(){
        console.log(state);
    }

    return (
        <div className="card">
            <h1>{listName}</h1>
            {list.length === 0 ? <li className="card-body"><div className="task-content">No tasks added</div></li> : null}
            {list.map((item, index) => (
                <li key={`item-${index}`} className="card-body">
                    <div className="task-content">{item}</div>
                    <div className="delete-container">
                        <button className="delete" onClick={() => delTaskHook(index, item)}>-</button>
                        <button onClick={click}>LOG</button>
                    </div>
                </li>
            ))}
            <AddTaskForm listName={listName} />
        </div>
    );
};
export default TaskList;
