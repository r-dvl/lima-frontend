import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../../App.css';

function Home() {
    return (
        <div className="app-container">
            <Header />
            <div className='content'>
                <h1> HOME PAGE </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Home;