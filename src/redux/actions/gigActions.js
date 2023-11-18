import { showMessage } from 'react-native-flash-message';
import { Fetch } from '../../utils/APIservice';
import {
  GET_GIGS_ERROR,
  GET_GIGS_SUCCESS,
  GIG,
  PUBLISH_GIG,
  PUBLISH_GIG_ERROR,
  PUBLISH_GIG_SUCCESS,
} from '../constants/constants';

export const publishSimpleGig = (body, token, navigation, screen) => async dispatch => {
  dispatch({
    type: PUBLISH_GIG,
  });

  try {
    let res = await Fetch.postFormData('/api/service/user', body, token);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      dispatch({
        type: PUBLISH_GIG_SUCCESS,
        payload: res,
      });
      showMessage({
        message: 'Published',
        type: 'success',
      });
      setTimeout(() => {
        navigation.navigate(screen);
        screen === 'ArtistHome' && dispatch(getGigsOfUser());
      }, 50);
    } else {
      const { message } = await res.json();
      dispatch({
        type: PUBLISH_GIG_ERROR,
        payload: res,
      });
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    dispatch({
      type: PUBLISH_GIG_ERROR,
    });
    console.log('err', error);
  }
};

export const verify = async (body, token) => {
  try {
    let res = await Fetch.postFormData('/api/verification', body, token);
    console.log(res.status);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log({ res });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });

      throw new Error(message ?? 'Something went wrong');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getGigById = async (id, token) => {
  try {
    let res = await Fetch.get(`/api/service/${id}`, token);

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
  } catch (error) {
    console.log(error);
  }
};

export const getGigsOfUser = token => async dispatch => {
  dispatch({
    type: GIG,
  });

  try {
    let res = await Fetch.get('/api/service/user', token);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      // console.log(res);

      dispatch({
        type: GET_GIGS_SUCCESS,
        payload: res,
      });

      return res;
    } else {
      const { message } = await res.json();

      showMessage({
        message: message,
        type: 'danger',
      });
      dispatch({
        type: GET_GIGS_ERROR,
        payload: res,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const addDiscount = async (id, data, token) => {
  try {
    let res = await Fetch.put(`/api/service/discount/add/${id}`, data, token);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log(res);

      return res;
    } else {
      const { message } = await res.json();

      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
