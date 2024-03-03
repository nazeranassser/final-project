import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
            {/* Add more blog information here */}
        </div>
    );
};

export default Blog;