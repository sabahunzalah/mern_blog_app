import express from 'express';
import Blog from '../models/Schema.js';

const    router = express.Router();

// Add a new blog
export const AddBlog = async (req, res) => {
  const { title, description, author } = req.body;
  const newBlog = new Blog({
    title,
    description,
    author,
  });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all blogs
export const GetBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

router.post('/add', AddBlog);
router.get('/', GetBlogs);

export default router;
