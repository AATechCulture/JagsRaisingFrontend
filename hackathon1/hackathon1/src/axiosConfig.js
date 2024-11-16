import axios from "axios";

const api = axios.create({
  baseURL: "https://jagsraising.onrender.com",
});

export default api;