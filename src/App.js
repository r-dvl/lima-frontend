import './App.css';
import React, { useState, useEffect } from 'react';

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
        <div className="App">
            <h1>Cat-Watcher</h1>
            <div className="photo-list">
                {photos.map(photo => (
                    <div key={photo.id} className="photo-item">
                        <img src={`data:image/jpeg;base64,${photo.image}`} alt={`${photo.date}`} />
                        <p>Date: {photo.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default App;