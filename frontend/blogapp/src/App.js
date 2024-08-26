import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
// import Login from "./pages/Login.js";
// import Register from "./pages/Register.js";
import AddBlogForm from "./pages/AddBlog.js";
import { getBlogs } from './services/blogServices.js';
import HeaderNav from './component/Header.js';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const addBlogToList = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/home" element={<Home blogs={blogs} />} />
        <Route path="/addblog" element={<AddBlogForm addBlogToList={addBlogToList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
