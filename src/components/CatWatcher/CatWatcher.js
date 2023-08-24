import React, { useEffect, useState } from 'react';
import './CatWatcher.css';
import { Paper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CatWatcher() {
    // Convert date picker time to yyyy-mm-dd (Revisar, puto datepicker)
    function convertToYyyMmDd(dateString) {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    // Photos
    const [photos, setPhotos] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 9;

    // Transform date from datepicker to Api date
    const apiDate = convertToYyyMmDd(selectedDate)

    // Get Photos from server
    useEffect(() => {
        fetch(`/photos/date/${apiDate}`)
            .then(response => response.json())
            .then(photosData => {
                setPhotos(photosData);
            })
            .catch(error => {
                console.error('Error fetching photos:', error);
            });
    }, []);

    // Filter Photos by date and time
    const filteredAndSortedPhotos = photos
        .filter(photo => {
            if (!selectedDate) return true;
            const photoDate = new Date(photo.date);
            console.log(photoDate)
            const selectedDateStart = new Date(selectedDate);
            console.log(selectedDateStart)
            selectedDateStart.setHours(0, 0, 0, 0);
            console.log(selectedDateStart)
            const selectedDateEnd = new Date(selectedDate);
            selectedDateEnd.setHours(23, 59, 59, 999);
            console.log(selectedDate)
            return photoDate >= selectedDateStart && photoDate <= selectedDateEnd;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pagination
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const photosToShow = filteredAndSortedPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);
    const totalPages = Math.ceil(filteredAndSortedPhotos.length / photosPerPage);

    return (
        <div className="container">
            {/* Controls */}
            <div className="controls">
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                />
            </div>

            {/* Photos */}
            <div className="photo-list">
                {photosToShow.map(photo => (
                    <Paper key={photo.date} elevation={3} className="photo-item">
                        <img src={`data:image/jpeg;base64,${photo.image}`} alt={`${photo.date}`} />
                        <p>{new Date(photo.date).toLocaleString()}</p>
                    </Paper>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{ marginRight: '10px' }}
                >
                    <ArrowBackIcon />
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastPhoto >= filteredAndSortedPhotos.length}
                >
                    <ArrowForwardIcon />
                </Button>
                <p style={{ marginLeft: '10px' }}>
                    Page {currentPage} of {totalPages}
                </p>
            </div>
        </div>
    );
}

export default CatWatcher;
