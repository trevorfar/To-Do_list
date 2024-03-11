import React, { useState } from 'react';
import TaskList from '../ListEndpoint/ListPageComps/TaskList';
import DeleteListButton from '../ListEndpoint/ListPageComps/DeleteList';
import useTaskList from '../ListEndpoint/ListPageComps/UseTaskList';
import DropdownButton from './ListPageComps/ButtonDrop';
import './ListPage.css';

interface ListPageProps {
  listName: string;
  lists: string[];
}

const ListPage: React.FC<ListPageProps> = ({ listName, lists }) => {
  const { list, delTask, delList } = useTaskList(listName);
  const [selectedListIndex, setSelectedListIndex] = useState<number | null>(null);

  const handleListChange = (index: number) => {
    setSelectedListIndex(index);
  };

  return (
    <>
      <div className="container">
        <div className="card-container">
          <h1>{selectedListIndex !== null ? lists[selectedListIndex] : listName}</h1>
          <TaskList list={list} listName={selectedListIndex !== null ? lists[selectedListIndex] : listName} delTask={delTask} />
          <div className="outside-card">
            <DropdownButton lists={lists} onItemClick={handleListChange} />
            <DeleteListButton listName={listName} delList={delList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;
