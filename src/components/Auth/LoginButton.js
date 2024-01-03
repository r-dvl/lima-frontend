import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

/**
 * @component
 * @returns {React.Element} A button that redirects the user to the login page upon click.
 */
const LoginButton = () => {
    const history = useHistory();

    /**
     * Handles the button click event, redirecting the user to the login page.
     */
    const handleLogin = () => {
        history.push('/login');
    };

    return (
        <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
        </Button>
    );
};

export default LoginButton;
