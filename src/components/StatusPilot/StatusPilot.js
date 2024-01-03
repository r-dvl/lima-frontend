import React from 'react';
import { Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './StatusPilot.css'

/**
 * @component
 * @param {object} props - The props of the component.
 * @param {string} props.title - The title of the status.
 * @param {string} props.status - The status, which can be 'running' or other values.
 * @returns {React.Element} A status indicator that displays the title and a colored dot based on the status.
 */
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
