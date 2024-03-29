import React from 'react';
import TaskList from '../ListEndpoint/ListPageComps/TaskList';
import DeleteListButton from '../ListEndpoint/ListPageComps/DeleteList';
import useTaskList from '../../../outdated/UseTaskList';
import DropdownButton from './ListPageComps/ButtonDrop';
import './ListPage.css'

interface ListPageProps { 
    listName: string;
    lists: string[];
}

const ListPage: React.FC<ListPageProps> = ({listName, lists}) => {
    const { list } = useTaskList(listName);
    
    return (    
        <>
            <div className="container">
                <div className="card-container">
                    <TaskList list={list} listName={listName} />
                    <div className="outside-card">
                    <DropdownButton lists={lists} />
                    <DeleteListButton listName={listName} />
                </div>
                </div>
            </div>
        </>
    );
};
export default ListPage;
