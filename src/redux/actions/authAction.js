import {
  SIGN_IN,
  SIGN_UP,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
  SIGN_IN_FAILED,
  ONE_SIGNAL_ID,
  PROFILE_UPDATE,
  SEND_OTP_FAIL,
  SEND_OTP_SUCCESS,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  SAVE_USER_DATA,
  SAVE_TOKEN,
} from '../constants/constants';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/APIservice';

export const signup = (phone_number, email, password) => async dispatch => {
  if (phone_number) {
    var data = {
      phone_number: phone_number,
    };
  } else {
    var data = {
      email: email,
      password: password,
    };
  }

  await api
    .post('/api/users', data)
    .then(res => {
      if (res.status == 201) {
        showMessage({
          message: 'Sign Up Successfully!',
          type: 'success',
        });
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: data,
        });
      } else {
        showMessage({
          message: res.status,
          type: 'danger',
        });
      }
    })
    .catch(error => {
      showMessage({
        message: 'Error in service!',
        type: 'danger',
      });
      dispatch({
        type: SIGN_UP_FAILED,
        payload: { flag: true, text: error.error },
      });
    });
};

export const testUpdateIsArtist = payload => dispatch => {
  dispatch({
    type: 'TEST_UPDATE_IS_ARTIST',
    payload,
  });
};

export const saveUserData = payload => dispatch => {
  dispatch({
    type: SAVE_USER_DATA,
    payload,
  });
};

export const saveToken = payload => dispatch => {
  console.log(payload.token, 'action_token');
  dispatch({
    type: SAVE_TOKEN,
    payload,
  });
};

export const sentOtpCode = data => async (dispatch, getState) => {
  const { number: phone_number } = data;
  console.log('phone', phone_number);
  try {
    const { data } = await api.post('/api/users', { phone_number });
    console.log('data', data);
    dispatch({
      type: SEND_OTP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEND_OTP_FAIL,
      payload: error.message,
    });
  }
};

export const email_login = (email, password, oneSignalId) => async dispatch => {
  dispatch({
    type: SIGN_IN,
  });
  const data = { password, email, oneSignalId };
  await api
    .request('post', 'users/login', data)
    .then(async res => {
      if (res.status === 200) {
        await AsyncStorage.setItem('userToken', JSON.stringify(res.data.token));
        showMessage({
          message: 'Logged In Successfully!',
          type: 'success',
        });
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: res.data,
        });
      } else {
        showMessage({
          message: res.status,
          type: 'danger',
        });
      }
    })
    .catch(error => {
      showMessage({
        message: 'Error in service!',
        type: 'danger',
      });
      dispatch({
        type: SIGN_IN_FAILED,
        payload: { flag: true, text: error.error },
      });
    });
};

export const signout = () => async dispatch => {
  dispatch({ type: 'SIGN_OUT' });
};
