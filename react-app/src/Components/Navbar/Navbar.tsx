import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CreateList from './CreateList';

const Navbar: React.FC = () => {
    const [createList, setCreateList] = useState(0);
    
    const lists = Array.from({ length: createList }, (_, index) => index);

    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li><NavLink to="/" className="active-link">Home</NavLink></li>
                    {lists.map((list) => (
                        <li key={list}><CreateList /></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
