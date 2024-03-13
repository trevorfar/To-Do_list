import React from 'react';
import TaskList from '../ListEndpoint/ListPageComps/TaskList';
import DeleteListButton from '../ListEndpoint/ListPageComps/DeleteList';
import useTaskList from '../ListEndpoint/ListPageComps/UseTaskList';
import DropdownButton from './ListPageComps/ButtonDrop';
import './ListPage.css'

interface ListPageProps { 
    listName: string;
    lists: string[];
}

const ListPage: React.FC<ListPageProps> = ({listName, lists}) => {
    const { list, delList } = useTaskList(listName);
    
    return (    
        <>
            <div className="container">
                <div className="card-container">
                <h1>{listName}</h1>
                    <TaskList list={list} listName={listName} />
                    <div className="outside-card">
                    <DropdownButton lists={lists} />
                    <DeleteListButton listName={listName} delList={delList} />
                </div>
                </div>
            </div>
        </>
    );
};
export default ListPage;
