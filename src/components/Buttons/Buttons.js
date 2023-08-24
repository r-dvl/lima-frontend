import React from 'react';
import Button from '@mui/material/Button';

const OnButton = ({ onClick }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            ON
        </Button>
    );
};

const OffButton = ({ onClick }) => {
    return (
        <Button variant="contained" color="secondary" onClick={onClick}>
            OFF
        </Button>
    );
};

export { OnButton, OffButton };