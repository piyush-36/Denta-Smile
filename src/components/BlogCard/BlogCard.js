import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({blog}) => {
    const {title, img, description, category,url} = blog;

    console.log(url);

    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="blog-card">
                <div className="blog-img">
                    <img src={img} alt="blog" height={"200px"}/>
                    
                </div>
                <div className="blog-text">
                    <span><Link to="/">{category}</Link></span>
                    <h3><a href = {url} >{title}</a></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;