import React, { useState } from 'react';
import List from './List';
import Navbar from '../../Components/Navbar/Navbar';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addList = (listName: string) => {
        setTasks([...tasks, listName]);
    };

    return (
        <div>
            <Navbar tasks={tasks} />
            <List onAddList={addList} />
        </div>
    );
};

export default App;
