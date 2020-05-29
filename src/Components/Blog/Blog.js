import React, { useState } from 'react';
import './Blog.css';
import Slider from '../Slider/Slider'
import blogData from '../../fakeData'
import Post from '../Post/Post';
const Blog = () => {
    const first6 = blogData.slice(0, 6);
    const [blog, setBlog] = useState(first6)
    console.log(blog)
    return (
        <div>
            <Slider></Slider>
            {
                blog.map(blog => <Post blog={blog}></Post>)
            }
        </div>
    );
};

export default Blog;