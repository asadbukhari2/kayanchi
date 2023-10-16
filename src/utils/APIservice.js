import axios from 'axios';
import {baseURL} from '../utils/constants';
import {store} from '../redux/reducers';
import {Platform} from 'react-native';

let url = baseURL;

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async config => {
    console.log(store.getState().auth, '*************');
    const accessToken = store.getState().auth?.token;
    console.log(accessToken, 'accesstokens');

    if (accessToken) {
      console.log(accessToken);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;
