import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
});

// Books
export const fetchBooks = async (params?: { category?: string; search?: string }) => {
  const res = await api.get('/books', { params });
  return res.data;
};

export const fetchBook = async (slug: string) => {
  const res = await api.get(`/books/${slug}`);
  return res.data;
};

// Contact
export const sendContact = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const res = await api.post('/contact', data);
  return res.data;
};

// Auth
export const login = async (email: string, password: string) => {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};

export const register = async (email: string, password: string, name: string) => {
  const res = await api.post('/auth/register', { email, password, name });
  return res.data;
};

export default api;
