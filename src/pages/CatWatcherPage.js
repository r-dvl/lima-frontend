import React from 'react';
import '../App.css';
import Header from "../components/Header/Header";
import CatWatcher from "../components/CatWatcher/CatWatcher";
import CamControls from "../components/CamControls/CamControls";
import Footer from "../components/Footer/Footer";

function CatWatcherPage() {
    return (
        <div className='app-container'>
            <Header />
            <div className='content'>
                <CamControls />
                <CatWatcher />
            </div>
            <Footer />
        </div>
    )
}

export default CatWatcherPage;