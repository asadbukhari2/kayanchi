import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoading: false,
  token: null,
  isArtist: null,
  isConsumer: null,
  isSignUp: null,
  isAllowedToMain: false,
  userDetails: null,
  user: null,
  signUpUserData: null,
  categories: null,
};

import {
  SIGN_IN,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  SAVE_USER_DATA,
  SAVE_TOKEN,
  SET_IS_ARTIST,
  SET_IS_CONSUMER,
} from '../constants/constants';

const reducer = (state = initialState, action) => {
  console.log(action, 'reducer_token');
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        signUpUserData: { ...state.signUpUserData, ...action.payload },
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case SIGN_UP:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetails: action.payload,
        user: action.payload.user,
        isSignUp: true,
      };
    case 'SIGN_UP_SUCCESS_TOKEN_SET':
      return {
        ...state,
        token: state.userDetails.token,
        isAllowedToMain: true,
      };
    case SIGN_IN:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userDetails: action.payload,
        user: action.payload,
        isLoading: false,
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case SET_IS_ARTIST:
      return {
        ...state,
        isArtist: true,
        isConsumer: false,
      };
    case SET_IS_CONSUMER:
      return {
        ...state,
        isArtist: false,
        isConsumer: true,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userDetails: action.payload,
      };
    case VERIFY_OTP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'TEST_UPDATE_IS_ARTIST':
      return {
        ...state,
        userDetails: action.payload,
      };

    case SIGN_OUT:
      AsyncStorage.removeItem('persist:root');
      return initialState;

    default:
      return state;
  }
};

export default reducer;
