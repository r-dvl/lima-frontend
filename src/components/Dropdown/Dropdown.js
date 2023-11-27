import React, { useState } from 'react';
import { Button, Collapse } from '@mui/material';

import './Dropdown.css'


const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <Button
        onClick={toggleDropdown}
        variant="contained"
        color="primary"
        className="dropdown-button"
      >
        {title}
      </Button>
      <Collapse in={isOpen}>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Dropdown;