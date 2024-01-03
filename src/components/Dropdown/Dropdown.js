import React, { useState } from 'react';
import { Button, ClickAwayListener, Grow, Paper, Popper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './Dropdown.css'

/**
 * @component
 * @param {object} props - The props of the component.
 * @param {React.ReactNode} props.children - The child nodes of the component.
 * @returns {React.Element} A dropdown menu that displays the child nodes when the button is clicked.
 */
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  /**
   * Toggles the dropdown menu open or closed.
   */
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  /**
   * Closes the dropdown menu when a click is detected outside of it.
   * @param {Event} event - The triggering event.
   */
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="dropdown-container">
      <Button
        ref={anchorRef}
        onClick={handleToggle}
        variant="contained"
        style={{ backgroundColor: 'white' }}
        className="dropdown-button"
      >
        <MenuIcon style={{ color: 'black' }} />
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <div className="dropdown-menu">
                  {React.Children.map(children, child => (
                    <div className="dropdown-item">{child}</div>
                  ))}
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Dropdown;
