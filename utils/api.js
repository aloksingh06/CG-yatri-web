// services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  withCredentials: true, // ye cookies (like JWT) bhejne ke liye
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
