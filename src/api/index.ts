import axios from 'axios';

const BASE_URL = 'http://localhost:8081';
// const BASE_URL = '';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;