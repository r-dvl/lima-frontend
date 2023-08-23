import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TopNav() {
    return (
        <AppBar position="static" className="topNav">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="logo256.png" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
                    <Typography variant="h6">Lima</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopNav;