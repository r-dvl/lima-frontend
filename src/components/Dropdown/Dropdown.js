import React, { useState } from 'react';
import { Button, ClickAwayListener, Grow, Paper, Popper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './Dropdown.css'

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
