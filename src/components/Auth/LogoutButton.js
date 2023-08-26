import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

const LogoutButton = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;