import React from 'react';
import '../App.css';
import Login from "../components/Auth/Login";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function LoginPage() {
    return (
        <div className='app-container'>
            <Header />
            <div className='content'>
                <Login />
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;