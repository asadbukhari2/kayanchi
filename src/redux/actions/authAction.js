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
  GET_MY_PROFILE,
  GET_USER_DETAIL,
  GET_PROFILE,
  SET_IS_CONSUMER,
} from '../constants/constants';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API, { Fetch } from '../../utils/APIservice';
import { getBookingSlots, getConsumerBrowse, getMyOrders, getUserDiscoveries } from './commonActions';
import { useSelector } from 'react-redux';

export const EMAIL_LOGIN =
  ({ email, password }) =>
  async dispatch => {
    dispatch({
      type: SIGN_IN,
    });
    try {
      const data = { password, email };

      let res = await Fetch.post('/api/users/login', data);
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        console.log('this is the token', res.type_login);
        await AsyncStorage.setItem('userToken', JSON.stringify(res.token));
        dispatch(module.exports.getMyProfile(res.token));

        showMessage({
          message: 'Logged In Successfully!',
          type: 'success',
        });
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: res,
        });

        if (res.type_login === 'artist') {
          dispatch(getMyOrders(res.token));
          dispatch(getBookingSlots(res.token));
          dispatch({
            type: SET_IS_ARTIST,
          });
        } else {
          // const location = useSelector(state => state.common.currentLocation);
          dispatch(getUserDiscoveries(res.token));
          dispatch(getConsumerBrowse(res.token));
          dispatch({
            type: SET_IS_CONSUMER,
          });
        }
      } else {
        const { message } = await res.json();
        console.log('this is the message', message);
        showMessage({
          message: message,
          type: 'danger',
        });
        dispatch({
          type: SIGN_IN_FAILED,
        });
      }
    } catch (error) {
      console.log('this is the error', error);
      showMessage({
        message: 'Something went wrong',
        type: 'danger',
      });
      dispatch({
        type: SIGN_IN_FAILED,
      });
    }
  };

export const SIGNUP = (data, navigation) => async dispatch => {
  console.log('signup action data', data);
  dispatch({
    type: SIGN_UP,
  });
  let res = await Fetch.post(
    `/api/users/${data.type_login === 'artist' ? 'artist' : data.type_login === 'studio' ? 'studio' : 'consumer'}`,
    data,
  );
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();
    console.log('signup action res', res.token, res.status, res);


    await AsyncStorage.setItem('userToken', res.token);
    showMessage({
      message: 'Successfully Created Your Account',
      type: 'success',
    });
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res,
    });
    if (res.user.type_login === 'artist' || res.user.type_login === 'studio') {
      navigation.navigate('ArtistOnBoardingWelcome');
    } else {
      console.log('signup action res', res.token, res.status, res);
      // navigation.navigate('ConsumerHome');
    }
  } else if (res.status >= 500) {
    res = await res.json();
    showMessage({
      message: 'Something went wrong ' || res.message,
      type: 'danger',
    });
  } else {
    const { message } = res;
    showMessage({
      message: message || 'Something Went Wrong',
      type: 'danger',
    });
    dispatch({
      type: SIGN_UP_FAILED,
      payload: message,
    });
    throw new Error(message ?? 'Something went wrong');
  }
};

export const updateProfile = data => async dispatch => {
  let res = await Fetch.put('/api/profile', data);

  if (res.status >= 200 && res.status < 300) {
    res = await res.json();
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: res,
    });
  } else {
    const { message } = await res.json();
    showMessage({
      message: message || 'Something Went Wrong',
      type: 'danger',
    });
  }
};
export const toggleTax = async data => {
  let res = await Fetch.put('/api/profile/toggleTax', data);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();
    console.log(res);
  } else {
    const { message } = await res.json();
    showMessage({
      message: message || 'Something Went Wrong',
      type: 'danger',
    });
  }
};

export const getMyProfile = token => async dispatch => {
  dispatch({ type: GET_PROFILE, payload: true });
  let res = await Fetch.get('/api/profile/myprofile/', token);

  if (res.status >= 200 && res.status < 300) {
    res = await res.json();

    dispatch({
      type: GET_MY_PROFILE,
      payload: res,
    });
  } else {
    dispatch({ type: GET_PROFILE, payload: false });
    const { message } = await res.json();
    showMessage({
      message: message || 'Something Went Wrong',
      type: 'danger',
    });
  }
};
export const updateUserDetail = async data => {
  try {
    let res = await Fetch.put('/api/users/profileDetails/1', data);

    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      const message = await res.json();
      showMessage({
        message: message || 'Something Went Wrong',
        type: 'danger',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const setUserDefaultAddress = async data => {
  try {
    let res = await Fetch.post('/api/address/default/', data);

    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      const message = await res.json();
      showMessage({
        message: message || 'Something Went Wrong',
        type: 'danger',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getUserProfileDetails = () => async dispatch => {
  try {
    let res = await Fetch.get('/api/users/profileDetails/1');

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      dispatch({ type: 'GET_USER_PROFILE_DETAILS', payload: res });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message || 'Something Went Wrong',
        type: 'danger',
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: 'Something Went Wrong',
      type: 'danger',
    });
  }
};

export const getUserDetail = id => async dispatch => {
  try {
    let res = await Fetch.get(`/api/users/${id}`);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      dispatch({ type: GET_USER_DETAIL, payload: res });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message || 'Something Went Wrong',
        type: 'danger',
      });
    }
  } catch (error) {
    console.log(error);
  }
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
