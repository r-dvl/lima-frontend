import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import jwtDecode from 'jwt-decode';

function User() {
    const [user, setUser] = useState(null);

    const decodeToken = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken;
        } catch (error) {
            console.error('Decode error', error);
            return null;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = decodeToken(token);
            setUser(decodedToken);
        }
    }, []);

    return (
        <div>
            {user && <Typography variant="body2" style={{ marginLeft: '10px' }}>{user.username}</Typography>}
        </div>
    )
}

export default User;