import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Paper } from '@mui/material';
import TopNav from './TopNav';
import Footer from './Footer';

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('/photos')
            .then(response => response.json())
            .then(photosData => {
                setPhotos(photosData);
            })
            .catch(error => {
                console.error('Error fetching photos:', error);
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className={"App"}>
                <TopNav />
                <div className="photo-list">
                    {photos.map(photo => (
                        <Paper key={photo.id} elevation={3} className="photo-item">
                            <img src={`data:image/jpeg;base64,${photo.image}`} alt={`${photo.date}`} />
                            <p>Date: {photo.date}</p>
                        </Paper>
                    ))}
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;