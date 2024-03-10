  import React, {useState, useEffect } from 'react';
  import { NavLink } from 'react-router-dom';
  import './navbar.css';



  const Navbar: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    
    
    useEffect(() => {
    const fetchData = async () => {
    const user_id = 1;
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
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to={'/'} className="active-link">
              Home
            </NavLink>
          </li>
          {tasks.length > 0 && (
            <li>
              <NavLink to={`/${tasks[0]}`} className="active-link">
                {tasks[0]}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
  };  

  export default Navbar;
