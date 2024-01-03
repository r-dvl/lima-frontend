import React from 'react';

import './ScrollBar.css';

/**
 * @component
 * @param {object} props - The props of the component.
 * @param {Array} props.sections - The sections for the scrollbar.
 * @param {number} props.currentSectionIndex - The index of the current section.
 * @param {function} props.scrollToSection - The function to scroll to a section.
 * @param {function} props.setCurrentSection - The function to set the current section.
 * @returns {React.Element} A scrollbar that allows navigation between sections.
 */
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
