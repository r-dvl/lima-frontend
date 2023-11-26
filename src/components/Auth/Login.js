import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Paper, Typography, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom'; // Importa useHistory

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

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // Inicializa useHistory

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.API_URL}/auth/login`, { email, password });
            const token = response.data.token;

            localStorage.setItem('token', token);

            // Redirige al usuario a la página de inicio
            history.push('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
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
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
    );
};

export default Login;
