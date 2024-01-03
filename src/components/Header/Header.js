import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from "../../logo.svg";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";

import jwt_decode from 'jwt-decode';

/**
 * @component
 * @returns {React.Element} A header that displays navigation links and a login/logout button.
 */
function Header() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    /**
     * Checks the JWT token's expiry time and removes it if it's expired.
     */
    useEffect(() => {
        if (token) {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('token');
                setToken(null);
            }
        }
    }, [token]);

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
