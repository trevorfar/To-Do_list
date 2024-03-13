import React, {useState, useEffect} from 'react';
import AddTaskForm from './AddTask';
import DeleteTaskForm from './DeleteTask';

interface TaskListProps {
    listName: string;
    list: string[];
}
const TaskList: React.FC<TaskListProps> = ({list, listName}) => {
    const [lists, setLists] = useState<string[]>([]);


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
                    <DeleteTaskForm index={index} setList={setLists} item={item}/>
                    </div>
                </li>
            ))}
            <AddTaskForm listName={listName} setList={setLists} />
        </div>
    );
};
export default TaskList;
