import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
const Navbar: React.FC = () => {

  return (
    <div className="navbar">
      <nav>
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
