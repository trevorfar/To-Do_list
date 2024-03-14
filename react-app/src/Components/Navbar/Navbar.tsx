  import React, {useEffect} from 'react';
  import { NavLink } from 'react-router-dom';
  import './navbar.css';



  const Navbar: React.FC = () => {
    const testButton =  () => {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key!=null){
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
      }
    }
    }
  
    const scaryTestButton = () => {
      localStorage.clear();
      console.log("localstorage cleared");
    }
    
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
            <li>
              <NavLink to={`/ListsHome`} className="active-link">
                To-Do
              </NavLink>
            </li>
          <li>
          <button onClick={testButton}>Test Local</button>
          <button onClick={scaryTestButton} >Scary Button </button>
          </li>
        </ul>
      </nav>
    </div>
  );
  };  

  export default Navbar;
