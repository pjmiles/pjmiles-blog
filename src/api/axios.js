import axios from "axios";

export const baseURL = "https://blogpostapi1.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
