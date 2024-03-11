import React, { useState } from 'react';
import './dropDown.css';

interface ButtonDropDownProps {
  lists: string[];
  onItemClick: (index: number) => void;
}

const DropdownButton: React.FC<ButtonDropDownProps> = ({ lists, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (index: number) => {
    onItemClick(index); // Pass the index to the parent component
    setIsOpen(false); // Close the dropdown
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
              <li key={index} onClick={() => handleItemClick(index)}>
                <div className="dropdown-item">{listName}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
