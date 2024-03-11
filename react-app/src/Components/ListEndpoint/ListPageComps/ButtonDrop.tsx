import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './dropDown.css'

interface ButtonDropDownProps {
  lists: string[];
}

const DropdownButton: React.FC<ButtonDropDownProps> = ( {lists}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
      Switch List
      </button>
      {isOpen && (
        <div className="dropdown-menu">
            <ul>
            {lists.map((listName, index) => (
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
