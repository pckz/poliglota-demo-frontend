import axios from "axios";

var api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://poliglota-demo-backend.herokuapp.com"
      : "http://localhost:3000",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;