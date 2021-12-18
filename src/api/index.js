import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import queryString from 'query-string';

const BASE_API_URL = 'http://svcy3.myclass.vn/api';

const axiosClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
  paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) config.headers.Authorization = 'Bearer ' + token;
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) return response.data;
    return response;
  },
  error => {
    if (JSON.stringify(error).status === null) AsyncStorage.removeItem('token');
    throw error;
  }
);

export default axiosClient;
