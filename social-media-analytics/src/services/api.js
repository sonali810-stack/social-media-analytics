import axios from 'axios';

const API_BASE_URL = "http://20.244.56.144/api";
const ACCESS_TOKEN = "rtCHZJ";  // Hardcoded token

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export default instance;
