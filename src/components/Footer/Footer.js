import React from 'react';
import './Footer.css';
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
                © 2023 Lima. WebApp by R-dVL.
            </Typography>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginTop: '10px', height: "100%" }}>
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