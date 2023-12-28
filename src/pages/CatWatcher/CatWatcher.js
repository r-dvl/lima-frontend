import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DatePicker from 'react-datepicker';
import { Paper, Button, Typography } from '@mui/material';
import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StatusPilot from '../../components/StatusPilot/StatusPilot';
import Dropdown from '../../components/Dropdown/Dropdown';

import '../../App.css';
import './CatWatcher.css';
import 'react-datepicker/dist/react-datepicker.css';

const apiUrl = process.env.REACT_APP_API_URL

function CatWatcher() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Convert date picker time to yyyy-mm-dd
    function convertToYyyMmDd(dateString) {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    // Get number of photos from server
    const [photosNumber, setPhotosNumber] = useState([]);
    const photosPerPage = 9;

    useEffect(() => {
        // Transform date from datepicker to Api date
        const apiDate = convertToYyyMmDd(selectedDate);
        const token = localStorage.getItem('token');

        axios.get(`${apiUrl}/photos/count/${apiDate}`, {
            headers: {
                Authorization: token,
            },
        })
            .then(response => {
                console.log('Received count:', response.data);
                setPhotosNumber(response.data);
            })
            .catch(error => {
                console.error('Error fetching count', error);
            });
    }, [selectedDate]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPhoto = currentPage * photosPerPage;
    const totalPages = Math.ceil(photosNumber.count / photosPerPage);

    // Get Photos from server
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // Transform date from datepicker to Api date
        const apiDate = convertToYyyMmDd(selectedDate);
        const token = localStorage.getItem('token');

        axios.get(`${apiUrl}/photos/date/${apiDate}/${currentPage}`, {
            headers: {
                Authorization: token,
            },
        })
            .then(response => {
                console.log('Received photosData:', response.data);
                setPhotos(response.data);
            })
            .catch(error => {
                console.error('Error fetching photos', error);
            });
    }, [selectedDate, currentPage]);


    // Delete photos
    const handleDelete = (id) => {
        const token = localStorage.getItem('token');

        axios.delete(`${apiUrl}/photos/${id}`, {
            headers: {
                Authorization: token,
            },
        })
            .then(response => {
                console.log('Photo deleted', response);
                setPhotos(photos.filter(photo => photo._id !== id));
            })
            .catch(error => {
                console.error('Error deleting photo', error);
            });
    };

    // Start Cat Watcher
    const handleOn = () => {
        const token = localStorage.getItem('token');

        axios.post(`${apiUrl}/docker/start/cat-watcher`, {
            headers: {
                Authorization: token,
            },
        })
            .then(response => {
                console.log('Cat Watcher started: ', response);
            })
            .catch(error => {
                console.error('Error starting Cat Watcher', error);
            });
    };

    // Stop Cat Watcher
    const handleOff = () => {
        const token = localStorage.getItem('token');

        axios.post(`${apiUrl}/docker/stop/cat-watcher`, {
            headers: {
                Authorization: token,
            },
        })
            .then(response => {
                console.log('Cat Watcher stopped: ', response);
            })
            .catch(error => {
                console.error('Error stopping Cat Watcher', error);
            });
    };

    // Cat Watcher status
    const [appStatus, setAppStatus] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`${apiUrl}/docker/status/cat-watcher`, {
            headers: {
                Authorization: token,
            },
        })
            .then(response => {
                console.log('Cat Watcher status: ', response.data);
                setAppStatus(response.data);
            })
            .catch(error => {
                console.error('Error receiving Cat Watcher status: ', error);
                setAppStatus('error')
            });
    }, [selectedDate, currentPage]);

    return (
        <div className='app-container'>
            <Header />
            <div className='content'>
                {/* Controls */}
                <div className="controls">
                    <StatusPilot
                        title='Status'
                        status={appStatus}
                    />
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select a date"
                    />
                    <Dropdown>
                        <Typography variant="body1">Cat Watcher</Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleOn()}
                            >
                                ON
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleOff()}
                            >
                                OFF
                            </Button>
                        </div>
                    </Dropdown>
                </div>

                {/* Photos */}
                {photosNumber.count > 0 ? (
                    <>
                        <div className="photo-list">
                            {photos.map(photo => (
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
                                disabled={indexOfLastPhoto >= photosNumber.count}
                            >
                                <ArrowForwardIcon />
                            </Button>
                        </div>
                        <p style={{ textAlign: 'center' }}>
                            Page {currentPage} of {totalPages}
                        </p>
                    </>
                ) : (
                    <p style={{ textAlign: 'center' }}>🐈 Los gatis andan dormidos 🐈‍⬛</p>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default CatWatcher;