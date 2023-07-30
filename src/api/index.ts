import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
