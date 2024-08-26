import axios from 'axios';

const API_URL = 'http://localhost:8000/blog';

export const addBlog = async (blog) => {
  try {
    const response = await axios.post(`${API_URL}/add`, blog);
    return response.data;
  } catch (error) {
    console.error('Error adding blog:', error);
    throw error;
  }
};

export const getBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error getting blogs:', error);
    throw error;
  }
};
