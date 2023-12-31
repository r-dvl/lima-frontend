import React, { useState } from 'react';
import { apiUrl } from '../../config';
import '../../App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import { TextField, Button, Container, Paper, Typography, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';


const MyPaper = styled(Paper)(() => ({
    marginTop: '25%',
    marginBottom: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
}));

const MyForm = styled('form')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(1),
}));

const MyButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

/**
 * @component
 * @returns {React.Element} A login page component that includes a form for username and password.
 */
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [error, setError] = useState('');

    /**
     * Handles the login form submission.
     * @param {Event} e - The triggering event.
     */
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/auth/login`, { username, password });
            const token = response.data.token;

            localStorage.setItem('token', token);

            history.push('/');
        } catch (error) {
            console.error('Login error', error);
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className='app-container'>
            <Header />
            <div className='content'>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <MyPaper elevation={3}>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <MyForm onSubmit={handleLogin}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="user"
                                label="User"
                                name="user"
                                autoComplete="user"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && (
                                <Typography variant="body2" color="error">
                                    {error}
                                </Typography>
                            )}
                            <MyButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </MyButton>
                        </MyForm>
                    </MyPaper>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default Login;