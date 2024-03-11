import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './dropDown.css'
const DropdownButton: React.FC = () => {
const [tasks, setTasks] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const user_id = localStorage.getItem('user_id');
      const response = await fetch('http://localhost:3300/queryList', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ user_id })
          });

          if (response.ok) {
              console.log('Task Queried successfully!');
              const responseData = await response.json();
              setTasks(responseData.listNames);
              } else {
              console.error('Failed to query:', response.statusText);
          }
      }
      fetchData();
  }, []);

 
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Switch List
      </button>
      {isOpen && (
        <div className="dropdown-menu">
            <ul>
            {tasks.map((listName, index) => (
              <li key={index}>
                <Link className="active-link-drop"to={`/${listName}`}>
                  <div className="dropdown-item">{listName}</div>
                  </Link>
              </li>
            ))}

          </ul>
        </div>
      )}
    </div>
    
  );
}

export default DropdownButton;
