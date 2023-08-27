import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from "../../logo.svg";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
                        <img src={Logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
                        <Typography variant="h6">Lima</Typography>
                        <div className="vertical-bar" />
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <div className="vertical-bar" />
                        <Button color="inherit" component={Link} to="/cat-watcher">Cat Watcher</Button>
                        <div className="vertical-bar" />
                    </Box>
                    {token ? ( <LogoutButton /> ) : ( <LoginButton />)}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
