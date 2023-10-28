import { showMessage } from 'react-native-flash-message';
import { Fetch } from '../../utils/APIservice';
import { PUBLISH_GIG, PUBLISH_GIG_ERROR, PUBLISH_GIG_SUCCESS } from '../constants/constants';

export const publishSimpleGig = (body, token) => async dispatch => {
  dispatch({
    type: PUBLISH_GIG,
  });
  console.log({ body });
  let res = await Fetch.post('/api/service/user', body, token);
  if (res.status >= 200 && res.status < 300) {
    res = await res.json();
    console.log({ res });
    showMessage({
      message: 'Gig Published!',
      type: 'success',
    });
    dispatch({
      type: PUBLISH_GIG_SUCCESS,
      payload: res,
    });
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

    throw new Error(message ?? 'Something went wrong');
  }
};
