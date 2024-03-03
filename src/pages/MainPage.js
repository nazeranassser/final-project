import React, { useState, useEffect } from 'react';
import Blog from '../components/Blog';

const MainPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blogs from backend API
    }, []);

    return (
        <div>
            <h2>Main Page</h2>
            {blogs.map(blog => (
                <Blog key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default MainPage;