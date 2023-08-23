import React from 'react';
import './App.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';

function Footer() {
    const openSocialMediaProfile = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Paper elevation={3} square className="footer">
            <Typography variant="body2" align="center">
                © Lima. R-dVL.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <IconButton onClick={() => openSocialMediaProfile('https://www.linkedin.com/in/r-dvl/')}>
                    <LinkedIn />
                </IconButton>
                <IconButton onClick={() => openSocialMediaProfile('https://github.com/R-dVL')}>
                    <GitHub />
                </IconButton>
                <IconButton onClick={() => openSocialMediaProfile('https://www.instagram.com/rastdelvalle/')}>
                    <Instagram />
                </IconButton>
            </div>
        </Paper>
    );
}

export default Footer;