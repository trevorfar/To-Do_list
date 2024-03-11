import React, { useState } from 'react';
import './dropDown.css'

interface ButtonDropDownProps {
  lists: string[];
}

const DropdownButton: React.FC<ButtonDropDownProps> = ({lists}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

 
  const printIndex = (index: number) => {
    localStorage.setItem('index', String(index));
  }


  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
      Switch List
      </button>
      {isOpen && (
        <div className="dropdown-menu">
            <ul>
            {lists.map((listName, index) => (
              <li key={index} className="active-link-drop" onClick={() => { printIndex(index);  }}>
              <div className="dropdown-item">{listName}</div>
                  </li>
            ))}

          </ul>
        </div>
      )}
    </div>
    
  );
}

export default DropdownButton;
