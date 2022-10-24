import axios from 'axios';

const Api = axios.create({
  // baseURL: import.meta.env.VITE_URL_API
  baseURL: 'http://localhost:3333/api',
});




export default Api;
