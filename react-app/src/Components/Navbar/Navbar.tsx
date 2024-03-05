import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
  // import CreateList from './CreateList';

const Navbar: React.FC = () => {
  // const [listItems, setListItems] = useState<string[]>([]);

  // const addItemToList = (itemName: string) => {
  //   setListItems((prevItems) => [...prevItems, itemName]);
  // };

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to={'/Queries'} className="active-link">
              Home
            </NavLink>
          </li>
          {/* {listItems.map((item, index) => (
            <CreateList key={index} param1={item} />
          ))} */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
