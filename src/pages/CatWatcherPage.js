import React from 'react';
import Header from "../components/Header/Header";
import CatWatcher from "../components/CatWatcher/CatWatcher";
import CamControls from "../components/CamControls/CamControls";
import Footer from "../components/Footer/Footer";

function CatWatcherPage() {
    return (
        <div>
            <Header />
            <CamControls />
            <CatWatcher />
            <Footer />
        </div>
    )
}

export default CatWatcherPage;