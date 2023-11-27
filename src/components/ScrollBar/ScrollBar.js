import React from 'react';

import './ScrollBar.css';

function ScrollBar({ sections, currentSectionIndex, scrollToSection, setCurrentSection }) {
    return (
        <div className='scrollbar'>
            {sections.map((section, index) => (
                <div
                    key={section}
                    className={`scrollbar-item ${currentSectionIndex === index ? 'active' : ''}`}
                    onClick={() => {
                        scrollToSection(index);
                        setCurrentSection(index);
                    }}
                ></div>
            ))}
        </div>
    );
}

export default ScrollBar;
