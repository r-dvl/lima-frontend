import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

/**
 * @component
 * @returns {React.Element} A button that logs out the user and redirects them to the login page upon click.
 */
const LogoutButton = () => {
    const history = useHistory();

    /**
     * Handles the button click event, logging out the user and redirecting them to the login page.
     */
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
