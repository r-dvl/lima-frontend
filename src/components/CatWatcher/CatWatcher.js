import React, { useEffect, useState } from 'react';
import './CatWatcher.css';
import { Paper, Button } from '@mui/material';
import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CamControls from "../CamControls/CamControls";

function CatWatcher() {
    // Convert date picker time to yyyy-mm-dd
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

    // Get Photos from server
    useEffect(() => {
        // Transform date from datepicker to Api date
        const apiDate = convertToYyyMmDd(selectedDate);

        fetch(`/photos/date/${apiDate}`)
            .then(response => response.json())
            .then(photosData => {
                setPhotos(photosData);
            })
            .catch(error => {
                console.error('Error fetching photos:', error);
            });
    }, [selectedDate, photos]); // Include 'photos' in the dependency array


    // Filter Photos by date and time
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

    // Pagination
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const photosToShow = filteredAndSortedPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);
    const totalPages = Math.ceil(filteredAndSortedPhotos.length / photosPerPage);

    // Delete photos
    const handleDelete = (id) => {
        axios.delete(`/photos/${id}`)
            .then(response => {
                console.log(response.data.message);
                setPhotos(photos.filter(photo => photo._id !== id)); // Update the state
            })
            .catch(error => {
                console.error('Error deleting photo:', error);
            });
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="container">
            {/* Controls */}
            <div className="controls">
                <div className="horizontal-elements">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                        <MenuIcon />
                    </IconButton>
                    <CamControls anchorEl={anchorEl} onClose={handleMenuClose} />
                </div>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
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
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleDelete(photo._id)}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 'fit-content',
                                padding: '0',
                                margin: '0 auto',
                            }}
                        >
                            <DeleteOutlineIcon style={{ fontSize: '24px' }} />
                        </Button>
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
