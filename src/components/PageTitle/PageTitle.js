import React from 'react';
import './PageTitle.scss';

const PageTitle = ({title,description}) => {
    return (
        <div className='page-title'>
            <div className="container">
                <h2>Our Blog</h2>
                <p>Latest Blogs & News</p>
            </div>
        </div> 
    );
};

export default PageTitle;