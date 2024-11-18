import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cdn-dev.preoday.com/challenge/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
