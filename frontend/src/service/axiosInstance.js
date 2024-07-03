import axios from "axios";


const development = "http://localhost:8000/";
const production = "";
const axiosInstance = axios.create({
  baseURL: development,
});
export default axiosInstance;