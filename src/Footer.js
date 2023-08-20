import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Paper elevation={3} square>
            <Typography variant="body2" align="center">
                © Cat-Watcher. R-dVL.
            </Typography>
        </Paper>
    );
}

export default Footer;