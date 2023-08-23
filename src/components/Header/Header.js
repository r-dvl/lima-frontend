import React from 'react';
import './Header.css';
import Logo from "../../logo.svg";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Header() {
    return (
        <AppBar position="fixed" className="topNav">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
                    <Typography variant="h6">Lima</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;