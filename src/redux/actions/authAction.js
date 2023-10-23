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
} from '../constants/constants';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API, { Fetch } from '../../utils/APIservice';

export const EMAIL_LOGIN =
  ({ email, password }) =>
  async dispatch => {
    dispatch({
      type: SIGN_IN,
    });
    const data = { password, email };

    let res = await Fetch.post('/api/users/login', data);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      await AsyncStorage.setItem('userToken', JSON.stringify(res.token));
      showMessage({
        message: 'Logged In Successfully!',
        type: 'success',
      });
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: res,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
      dispatch({
        type: SIGN_IN_FAILED,
        payload: message,
      });
      throw new Error(message ?? 'Something went wrong');
    }
  };

export const SIGNUP = data => async dispatch => {
  let res = await Fetch.post('/api/users/artist', data);
  // if (phone_number) {
  //   var data = {
  //     phone_number: phone_number,
  //   };
  // } else {
  //   var data = {
  //     email: email,
  //     password: password,
  //   };
  // }
  // await API.post('/api/users', data)
  //   .then(res => {
  //     if (res.status == 201) {
  //       showMessage({
  //         message: 'Sign Up Successfully!',
  //         type: 'success',
  //       });
  //       dispatch({
  //         type: SIGN_UP_SUCCESS,
  //         payload: data,
  //       });
  //     } else {
  //       showMessage({
  //         message: res.status,
  //         type: 'danger',
  //       });
  //     }
  //   })
  //   .catch(error => {
  //     showMessage({
  //       message: 'Error in service!',
  //       type: 'danger',
  //     });
  //     dispatch({
  //       type: SIGN_UP_FAILED,
  //       payload: { flag: true, text: error.error },
  //     });
  //   });
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
    const { data } = await API.post('/api/users', { phone_number });
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

export const signout = () => async dispatch => {
  dispatch({ type: 'SIGN_OUT' });
};
