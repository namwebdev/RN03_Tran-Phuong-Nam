import axios from 'axios';
import {detectUrlByPlatform} from '../utils/common';

const baseUrl = detectUrlByPlatform();

export const getListGame = () => {
  return axios.get(`${baseUrl}/games`);
};

export const getGameDetail = id => {
  return axios.get(`${baseUrl}/games/${id}`);
};
