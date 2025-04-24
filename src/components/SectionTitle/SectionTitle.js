import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='section-title'>
            <span>{subTitle}</span>
            <h2>{title}</h2>
           
        </div>
    );
};

export default SectionTitle;
