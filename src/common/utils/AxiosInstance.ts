import Env from '../../config/Env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: Env.REACT_APP_API,
});

export default axiosInstance;
