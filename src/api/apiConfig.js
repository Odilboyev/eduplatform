import axios from "axios";

const url = "http://localhost:4000";

const config = axios.create({
  baseURL: url,
});
config.defaults.headers.common["Authorization"] =
  localStorage.getItem("eduToken");

export default config;
