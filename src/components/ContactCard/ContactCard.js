import React from 'react';

import './ContactCard.css'

function ContactCard() {
    return (
        <div className="contact-card">
            <div className="contact-photo">
                <img src='/profile.jpg' alt="Profile" />
            </div>
            <div className="contact-divider"></div>
            <div className="contact-social">
                <h2>Follow me 👋</h2>
                <a href="https://www.instagram.com/rastdelvalle/" target="_blank" rel="noopener noreferrer">
                    <img src='/instagram.svg' alt="Instagram Logo" />Instagram</a>
                <a href="https://github.com/R-dVL" target="_blank" rel="noopener noreferrer">
                    <img src='/github.svg' alt="Github Logo" />Github</a>
                <a href="https://www.linkedin.com/in/r-dvl/" target="_blank" rel="noopener noreferrer">
                    <img src='/linkedin.svg' alt="Linkedin Logo" />LinkedIn</a>
            </div>
        </div>
    );
}

export default ContactCard;
