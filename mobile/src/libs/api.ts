
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 2000,
});
