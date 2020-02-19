import axios from "axios";

var api = axios.create({
  baseURL:
  	process.env.NODE_ENV == null
      ? "http://localhost:3000"
      : "https://poliglota-demo-backend.herokuapp.com",
  crossDomain : true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default api;