import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
  SIGN_IN_FAILED,
  SEND_OTP_FAIL,
  SEND_OTP_SUCCESS,
  SAVE_USER_DATA,
  SAVE_TOKEN,
  SET_IS_ARTIST,
  SIGN_UP,
} from '../constants/constants';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fetch } from '../../utils/APIservice';

export const GET_INSIGHTS = async limit => {
  let res = await Fetch.get(`/api/insights/${limit}`);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();

    return res;
  } else {
    const { message } = await res.json();
    showMessage({
      message: message,
      type: 'danger',
    });

    throw new Error(message ?? 'Something went wrong');
  }
};
export const GET_ORDERS_SUMMARY = async id => {
  let res = await Fetch.get(`/api/artistview/booking_summary/${id}`);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();
    return res;
  } else {
    const { message } = await res.json();
    showMessage({
      message: message,
      type: 'danger',
    });

    throw new Error(message ?? 'Something went wrong');
  }
};
export const GET_ARTIST_METRICES = async id => {
  let res = await Fetch.get(`/api/artistview/metrices/${id}`);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();

    return res;
  } else {
    const { message } = await res.json();
    showMessage({
      message: message,
      type: 'danger',
    });

    throw new Error(message ?? 'Something went wrong');
  }
};
export const GET_ARTIST_EARNING = async limit => {
  let res = await Fetch.get(`/api/earning/${limit}`);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();

    return res;
  } else {
    const { message } = await res.json();
    showMessage({
      message: message,
      type: 'danger',
    });

    throw new Error(message ?? 'Something went wrong');
  }
};
