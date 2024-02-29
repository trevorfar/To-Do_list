import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Static/styles/navbar.css'


const Navbar: React.FC = () => {
    return(
        <div className="navbar">
        <nav>
        <ul>
          <li> <NavLink to="/" className="active-link">Home</NavLink> </li>
          <li> <NavLink to="/p1" className="active-link">Page 1</NavLink> </li>
        </ul>
      </nav>
      </div>
    );
  };
  export default Navbar
  