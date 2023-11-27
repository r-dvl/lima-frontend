import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import Header from "../../components/Header/Header";
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel'
import ContactCard from "../../components/ContactCard/ContactCard";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

import { TypeAnimation } from "react-type-animation";

import '../../App.css';
import './Home.css';

function Home() {
    //// SECTIONS ////
    const sections = useMemo(() => ["home", "projects", "contact"], []);
    const currentSectionRef = useRef(0);
    const [backgroundColor, setBackgroundColor] = useState('#88e3c8'); // Initial color (home section)
    // eslint-disable-next-line
    const [currentSection, setCurrentSection] = useState(0);

    const handleWheel = (event) => {
        const delta = event.deltaY;
        const currentIndex = currentSectionRef.current;

        if (delta > 0 && currentIndex < sections.length - 1) {
            // Scroll DOWN
            currentSectionRef.current = currentIndex + 1;
        } else if (delta < 0 && currentIndex > 0) {
            // Scroll UP
            currentSectionRef.current = currentIndex - 1;
        }

        scrollToSection(currentSectionRef.current);
    };

    const scrollToSection = useCallback((index) => {
        const sectionId = sections[index];
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });

            // Actualiza el estado de la sección actual
            currentSectionRef.current = index;

            // Actualiza el color de fondo según la sección
            if (sectionId === 'home') {
                setBackgroundColor('#88e3c8');
            } else if (sectionId === 'projects') {
                setBackgroundColor('#eee190');
            } else if (sectionId === 'contact') {
                setBackgroundColor('#88e3c8');
            }

            // Actualiza la URL con el hash de la sección
            window.history.pushState({ section: sectionId }, '', `#${sectionId}`);
        }
    }, [sections]);

    useEffect(() => {
        const handlePopstate = (event) => {
            const hash = window.location.hash.substring(1); // --# from Hashbang
            const index = sections.indexOf(hash);

            if (index !== -1) {
                currentSectionRef.current = index;
                scrollToSection(index);
            }
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, [sections, scrollToSection]);

    return (
        <div className="app-container">
            <Header />
            <div className='content'>
                <div className='home' onWheel={handleWheel} style={{ backgroundColor }}>
                    <Header visible={currentSectionRef.current !== 0} />
                    <ScrollBar
                        sections={sections}
                        currentSectionIndex={currentSectionRef.current}
                        scrollToSection={scrollToSection}
                        setCurrentSection={setCurrentSection}
                    />
                    <div className="section" id="home">
                        <div className="section home-container">
                            <div className="type-animation-container">
                                <TypeAnimation sequence={[
                                    'Hi!',
                                    1000,
                                    'Its me,',
                                    200,
                                    'R-dVL.',
                                    1000,
                                    'Wops..',
                                    200,
                                    'Raúl Del Valle Lima.',
                                    1000,
                                    'I am Software Engineer.',
                                    1000,
                                    'And this is my portfolio!',
                                    1000,
                                ]}
                                    wrapper="span"
                                    deletionSpeed={10}
                                    cursor={true}
                                    repeat={Infinity}
                                    className='type-animation'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="section" id="projects">
                        <div className="section projects-container">
                            <div className='carousel-container'>
                                <CustomCarousel>
                                    <div>
                                        <h1>TODO: Cat Watcher</h1>
                                    </div>
                                    <div>
                                        <h1>TODO: Automation</h1>
                                    </div>
                                </CustomCarousel>
                            </div>
                        </div>
                    </div>
                    <div className="section" id="contact">
                        <div className="section contact-container">
                            <ContactCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;