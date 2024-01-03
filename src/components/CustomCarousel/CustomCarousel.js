import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CustomCarousel.css'

/**
 * @component
 * @param {object} props - The props of the component.
 * @param {React.ReactNode} props.children - The child nodes of the component.
 * @returns {React.Element} A custom carousel that displays the child nodes.
 */
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
