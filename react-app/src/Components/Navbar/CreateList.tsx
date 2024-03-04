import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'


const CreateList: React.FC = () => {
    return(
        <ul>
            <li><NavLink to="/p1" className="active-link">List</NavLink></li>
        </ul>
    );
};

export default CreateList;

  