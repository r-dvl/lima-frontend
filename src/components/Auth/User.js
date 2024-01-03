import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import jwtDecode from 'jwt-decode';

/**
 * @component
 * @returns {React.Element} A component that displays the username of the logged-in user.
 */
function User() {
    const [user, setUser] = useState(null);

    /**
     * Decodes the JWT token.
     * @param {string} token - The JWT token to decode.
     * @returns {object|null} The decoded token, or null if an error occurred.
     */
    const decodeToken = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken;
        } catch (error) {
            console.error('Decode error');
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
    );
}

export default User;
