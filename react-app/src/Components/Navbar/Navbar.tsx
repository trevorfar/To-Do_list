import React, {useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
// import QueryDB from '../../Routes/Queries/QueryDB';

const Navbar: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleQuery = async (user_id: number) => {
    
    if (user_id) {
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
            console.log('Response Data:', responseData);
            setTasks(responseData.listNames);
            } else {
            console.error('Failed to query:', response.statusText);
        }
    }
    return null;
};
  

return (
  <div className="navbar">
    <nav>
      <ul>
        <li>
          <button onClick={() => handleQuery(1)}>Click This</button>
          <NavLink to={'/Queries'} className="active-link">
            Home
          </NavLink>
        </li>
        {tasks.map((listName, index) => (
          <li key={index}>{listName}</li> 
        ))}
      </ul>
    </nav>
  </div>
);
};

export default Navbar;
