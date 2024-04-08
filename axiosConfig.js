import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://hotel-management-mern-4.onrender.com',
  withCredentials: true
});

export default axiosInstance;