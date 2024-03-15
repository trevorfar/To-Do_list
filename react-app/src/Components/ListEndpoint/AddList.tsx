import React from 'react';
import './addList.css'
interface EmptyProps {
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

const addList = async (setList: React.Dispatch<React.SetStateAction<string[]>>) => {
  const list_name = window.prompt('Enter List Name:');
  if (list_name) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found in local storage');
      return;
    }

  if (list_name) {
    const response = await fetch('http://localhost:3300/addList', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({ list_name })
    });

    if (response.ok) {
      console.log('List added successfully!');
      setList((prevLists) => [...prevLists, list_name]); // Update state with new list name
    } else {
      console.error('Failed to add list:', response.statusText);
    }
  }
}
};

const AddList: React.FC<EmptyProps> = ({ setList }) => {
  return (
    <div className="container">
      <div><h1>No current lists</h1></div>
      <button className="Add-List" onClick={() => addList(setList)}>Create List</button>
      </div>  
      );
};

export default AddList;
