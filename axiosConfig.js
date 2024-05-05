import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://hotel-management-mern.onrender.com',
  withCredentials: true
});

export default axiosInstance;