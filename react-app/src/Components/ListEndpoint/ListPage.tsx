import React from 'react';
import { useParams, useState } from 'react-router-dom';
import TaskList from '../ListEndpoint/ListPageComps/TaskList';
import DeleteListButton from '../ListEndpoint/ListPageComps/DeleteList';
import useTaskList from '../ListEndpoint/ListPageComps/UseTaskList';
import DropdownButton from './ListPageComps/ButtonDrop';
import './ListPage.css'

const ListPage: React.FC = () => {
    const { listName = "" } = useParams<{ listName: string }>() ?? { listName: "" };
    const { list, delTask, delList } = useTaskList(listName);
    const [user_id, setUser_id] = useState("");

    return (    
        <>
            <div className="container">
                <div className="card-container">
                    <TaskList list={list} delTask={delTask}  />
                    <div className="outside-card">
                    <DropdownButton />
                    <DeleteListButton listName={listName} delList={delList} />
                </div>
                </div>
            </div>
        </>
    );
};
export default ListPage;
