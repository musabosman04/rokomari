import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './BlogDitle.css';
const BlogDitle = () => {
    const { postKey } = useParams();
    const post = fakeData.find(post => post.id === postKey);
    const { title, body, img, category, publish } = post;
    return (
        <div className="container">
            <div className="post-detail-container">
                <h2>{title}</h2>
                <div>
                    <span>PUBLISHED/ <i>{publish}</i></span>
                    <span>Category: <i>{category}</i></span>
                </div>
                <img src={img} alt="" />
                <p>{body}</p>
                <p>{body}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default BlogDitle;