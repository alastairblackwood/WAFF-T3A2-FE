import axios from "axios";

// Create an axios instance
const filmAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1/films", // development
  // baseURL: "https://wesandersonfilmfestival.herokuapp.com/api", // production
  //   baseURL: 'heroku server',
  withCredentials: true,
  timeout: 5000,
});

export default filmAPI;