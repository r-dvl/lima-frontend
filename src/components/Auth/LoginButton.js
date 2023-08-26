import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

const LoginButton = () => {
    const history = useHistory();

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
