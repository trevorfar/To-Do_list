import './checkbox.css'
import React, { useState } from 'react'
import CreateTask from './checkboxComp';


const Checkbox: React.FC = () => {

    const [createTask, setCreateTask] = useState(0);
    const tasks = Array.from({ length: createTask }, (_, index) => index);

    return (
        <>
        <button type="button" onClick={() => setCreateTask(createTask + 1)}>Click Me</button>
                <ul>
                    {tasks.map((task) => (
                    <CreateTask key={task} />
                ))}
                </ul>
        </>
    );
};

export default Checkbox