import React, { useState } from 'react';

import './Dropdown.css'


const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleDropdown}>
        <span>{title}</span>
        {isOpen ? ' ▲' : ' ▼'}
      </div>
      {isOpen && (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;