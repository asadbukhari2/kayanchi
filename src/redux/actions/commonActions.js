import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fetch } from '../../utils/APIservice';
import { GET_CATEGORIES, GET_CATEGORIES_DATA } from '../constants/constants';

export const getCategory = () => async dispatch => {
  dispatch({
    type: GET_CATEGORIES,
  });
  dispatch({
    type: GET_CATEGORIES_DATA,
    payload: [],
  });

  let res = await Fetch.get('/api/category');
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();

    showMessage({
      message: 'Fetched!',
      type: 'success',
    });
    dispatch({
      type: GET_CATEGORIES_DATA,
      payload: res.categories,
    });
  } else {
    const { message } = await res.json();
    showMessage({
      message: message,
      type: 'danger',
    });

    throw new Error(message ?? 'Something went wrong');
  }
};
