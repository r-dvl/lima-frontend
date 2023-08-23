import React, {useEffect, useState} from 'react';
import './CatWatcher.css';
import { Paper } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CatWatcher() {
    const [photos, setPhotos] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

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

    const filteredAndSortedPhotos = photos
        .filter(photo => {
            if (!selectedDate) return true;
            const photoDate = new Date(photo.date);
            const selectedDateStart = new Date(selectedDate);
            selectedDateStart.setHours(0, 0, 0, 0);
            const selectedDateEnd = new Date(selectedDate);
            selectedDateEnd.setHours(23, 59, 59, 999);
            return photoDate >= selectedDateStart && photoDate <= selectedDateEnd;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="container">
            <div className="filters">
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                />
            </div>
            <div className="photo-list">
                {filteredAndSortedPhotos.map(photo => (
                    <Paper key={photo.id} elevation={3} className="photo-item">
                        <img src={`data:image/jpeg;base64,${photo.image}`} alt={`${photo.date}`} />
                        <p>{new Date(photo.date).toLocaleString()}</p>
                    </Paper>
                ))}
            </div>
        </div>
    );
}

export default CatWatcher;
