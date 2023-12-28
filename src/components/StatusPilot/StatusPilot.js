import React from 'react';
import { Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './StatusPilot.css'

function StatusPilot({ title, status }) {
    const color = status === 'running' ? 'success' : 'error';

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <Typography variant="body1">{title}</Typography>
            <FiberManualRecordIcon color={color} />
        </div>
    );
}

export default StatusPilot;
