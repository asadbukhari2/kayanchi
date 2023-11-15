import { showMessage } from 'react-native-flash-message';
import { Fetch } from '../../utils/APIservice';
import {
  GET_CATEGORIES,
  GET_CATEGORIES_DATA,
  GET_CERTIFICATES_DATA,
  GET_EXPERIENCE_DATA,
  GET_SERVICES,
  GET_SERVICES_DATA,
  GET_SERVICES_ERROR,
} from '../constants/constants';

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

export const getCertificates = token => async dispatch => {
  dispatch({
    type: 'GET_CERTIFICATES',
  });
  dispatch({
    type: GET_CERTIFICATES_DATA,
    payload: [],
  });

  let res = await Fetch.get('/api/certification/mycertification', token);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();
    console.log(res[0]);
    dispatch({
      type: GET_CERTIFICATES_DATA,
      payload: res,
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

export const getExperiences = token => async dispatch => {
  dispatch({
    type: 'GET_EXPERIENCE',
  });
  dispatch({
    type: GET_EXPERIENCE_DATA,
    payload: [],
  });

  let res = await Fetch.get('/api/experience/myexperience', token);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();

    dispatch({
      type: GET_EXPERIENCE_DATA,
      payload: res,
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
export const getServices = (id, token) => async dispatch => {
  dispatch({
    type: GET_SERVICES,
  });
  dispatch({
    type: GET_SERVICES_DATA,
    payload: [],
  });

  let res = await Fetch.get(`/api/artistview/${id}`, token);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();

    dispatch({
      type: GET_SERVICES_DATA,
      payload: res.services['basic services'],
    });
  } else {
    dispatch({
      type: GET_SERVICES_ERROR,
    });
    const { message } = await res.json();
    showMessage({
      message: message,
      type: 'danger',
    });

    throw new Error(message ?? 'Something went wrong');
  }
};
