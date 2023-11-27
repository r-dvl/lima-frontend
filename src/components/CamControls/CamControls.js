import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { OnButton, OffButton } from '../Buttons/Buttons';
import axios from 'axios';

function CamControls({ anchorEl, onClose }) {
    // ON/OFF Buttons
    // eslint-disable-next-line
    const [status, setStatus] = useState('');

    const handleButtonClick = (newStatus) => {
        setStatus(newStatus);

        // HTTP Request to turn ON/OFF
        const url = `http://rdvl-server:3001/scripts/scripts/cat-watcher/${newStatus}`;

        axios.post(url)
            .then(response => {
                console.log('Request sent:', response.data);
            })
            .catch(error => {
                console.error('Request error:', error);
            });
    };

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            <MenuItem onClick={onClose}>
                <div className="camera-group">
                    <h4>Camera</h4>
                    <div className="button-group">
                        <OnButton onClick={() => handleButtonClick('on', 'server')} />
                        <OffButton onClick={() => handleButtonClick('off', 'server')} />
                    </div>
                </div>
            </MenuItem>
        </Menu>
    );
}

export default CamControls;