import axios from "axios";
import { API_ENDPOINT_URL } from "./env";
import * as localStorageServices from "../services/localStorage";

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    const token = localStorageServices.getToken();
    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
