import React from 'react';
import TaskList from '../ListEndpoint/ListPageComps/TaskList';
import DeleteListButton from '../ListEndpoint/ListPageComps/DeleteList';
import useTaskList from '../ListEndpoint/ListPageComps/UseTaskList';
import DropdownButton from './ListPageComps/ButtonDrop';
import './ListPage.css'

interface ListPageProps { 
    listName: string;
}

const ListPage: React.FC<ListPageProps> = ({listName}) => {
    const { list, delTask, delList  } = useTaskList(listName);
   
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
