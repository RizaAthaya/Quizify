import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://opentdb.com/",
  timeout: 5000,
});

export default axiosInstance;
