import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from "../../logo.svg";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";

function Header() {
    const token = localStorage.getItem('token');


    return (
        <AppBar position="fixed" className="topNav">
            <Toolbar>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 500, fontSize: '1.25rem', textTransform: 'capitalize' }}>
                            <img src={Logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
                            Lima
                        </Button>
                        <div className="vertical-bar" />
                        <Button color="inherit" component={Link} to="/cat-watcher">Cat Watcher</Button>
                        <div className="vertical-bar" />
                    </Box>
                    {token ? (<LogoutButton />) : (<LoginButton />)}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
