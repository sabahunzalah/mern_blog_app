import React from 'react'

const BlogCard = ({ blog }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '300px' }}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p><strong>Author:</strong> {blog.author}</p>
        </div>
      );
    };


export default BlogCard
