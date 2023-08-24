import React, { useState } from 'react';import './Header.css';
import Logo from "../../logo.svg";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Importa el ícono de menú
import Box from '@mui/material/Box';
import CamMenu from "../CamMenu/CamMenu";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" className="topNav">
            <Toolbar>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
                        <Typography variant="h6">Lima</Typography>
                    </Box>
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            <CamMenu anchorEl={anchorEl} onClose={handleMenuClose} />
        </AppBar>
    );
}

export default Header;
