import React from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../ListEndpoint/ListPageComps/TaskList';
import DeleteListButton from '../ListEndpoint/ListPageComps/DeleteList';
import useTaskList from '../ListEndpoint/ListPageComps/UseTaskList';
import './ListPage.css'

const ListPage: React.FC = () => {
    const { listName = "" } = useParams<{ listName: string }>() ?? { listName: "" };
    const { list, delTask, delList } = useTaskList(listName);

    return (    
        <>
            <div className="container">
                <div className="card-container">
                    <h1>Tasks</h1>
                    <TaskList list={list} delTask={delTask} />
                    <DeleteListButton listName={listName} delList={delList} />
                    <button > Switch List</button>
                </div>
            </div>
        </>
    );
};
export default ListPage;
