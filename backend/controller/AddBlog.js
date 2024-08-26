import express from 'express';
import Blog from '../models/Schema.js';

const router = express.Router();

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

router.post('/add', AddBlog);

export default router;
