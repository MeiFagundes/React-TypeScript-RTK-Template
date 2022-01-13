import Env from '../../config/env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: Env().REST_API_URL,
});

export default axiosInstance;
