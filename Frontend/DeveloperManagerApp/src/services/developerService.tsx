import axios from "axios";
import { baseURL } from '@env';

export const axiosInstance = axios.create({
  baseURL: baseURL,
  params: {
    'Content-Type': 'application/json',
  },
});