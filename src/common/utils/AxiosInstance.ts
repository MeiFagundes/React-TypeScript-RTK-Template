import Env from '../../config/env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: Env().API_URL,
});

export default axiosInstance;
