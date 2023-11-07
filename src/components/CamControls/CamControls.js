import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { OnButton, OffButton } from '../Buttons/Buttons';
import axios from 'axios';

function CamControls({ anchorEl, onClose }) {
    // ON/OFF Buttons
    const [status, setStatus] = useState('');
    const [host, setHost] = useState('');

    // Hardcoded version to run
    const version = '1.0.5';

    const handleButtonClick = (newStatus, newHost) => {
        setStatus(newStatus);
        setHost(newHost);

        // HTTP Request to turn ON/OFF
        const url = `/scripts/${newHost}/cat-watcher/${newStatus}`;

        // Request Body to turn on (script needs a version)
        const requestBody = {
            version: version,
        };

        axios.post(url, requestBody)
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
                    <h4>Server Camera</h4>
                    <div className="button-group">
                        <OnButton onClick={() => handleButtonClick('on', 'server')} />
                        <OffButton onClick={() => handleButtonClick('off', 'server')} />
                    </div>
                </div>
            </MenuItem>
            <MenuItem onClick={onClose}>
                <div className="camera-group">
                    <h4>RPi Camera</h4>
                    <div className="button-group">
                        <OnButton onClick={() => handleButtonClick('on', 'rpi')} />
                        <OffButton onClick={() => handleButtonClick('off', 'rpi')} />
                    </div>
                </div>
            </MenuItem>
        </Menu>
    );
}

export default CamControls;