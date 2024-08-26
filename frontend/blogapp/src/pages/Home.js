import React from 'react';
import BlogCard from '../component/BlogCard.js';

const Home = ({ blogs }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default Home;
