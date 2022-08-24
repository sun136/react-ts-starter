import axios from 'axios';

const request = axios.create({
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  timeout: 30 * 1000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;
