import React, { useState } from 'react';
import { addBlog } from '../services/blogServices.js';

const AddBlogForm = ({ addBlogToList }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, description, author };

    try {
      const response = await addBlog(blog);
      setMessage('Blog added successfully!');
      setTitle('');
      setDescription('');
      setAuthor('');
      addBlogToList(response); // Update the blog list
    } catch (error) {
      setMessage('Failed to add blog.');
    }
  };

  return (
    <div
      style={{
        // border: '2px solid red',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: '90vw',
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
          }}
        >
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div
          style={{
            width: '90vw',
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
          }}
        >
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div
          style={{
            width: '90vw',
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
          }}
        >
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBlogForm;
