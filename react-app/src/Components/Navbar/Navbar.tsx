import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import QueryDB from '../../Routes/Queries/QueryDB';

const Navbar: React.FC = () => {
  
  return (
    <div className="navbar">
      <nav>
      <QueryDB user_id={1}/>
        <ul>
          <li>
            <NavLink to={'/Queries'} className="active-link">
              Home
            </NavLink>
          </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
