import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CustomCarousel.css'

const CustomCarousel = ({ children }) => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            useKeyboardArrows={true}
            className='custom-carousel'
        >
            {children}
        </Carousel>
    );
};

export default CustomCarousel;