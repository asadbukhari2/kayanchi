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
  GET_PORTFOLIO_ERROR,
  GET_PORTFOLIO_DATA,
  GET_AVAILABLE_DAYS,
  GET_BOOKING_SLOTS,
  GET_ORDERS,
  GET_ORDERS_DATA,
  GET_ORDERS_ERROR,
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

export const getPortfolio = token => async dispatch => {
  try {
    let res = await Fetch.get('/api/portfolio/myportfolio/', token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log(res);
      dispatch({
        type: GET_PORTFOLIO_DATA,
        payload: res,
      });
    } else {
      dispatch({
        type: GET_PORTFOLIO_ERROR,
      });
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });

      throw new Error(message ?? 'Something went wrong');
    }
  } catch (error) {
    console.log('getPortfolio', error);
  }
};

export const getSavedAddresses = async token => {
  try {
    let res = await Fetch.get('/api/address/myaddress', token);
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
    console.log('getSavedAddresses', error);
  }
};

export const saveAddress = async (data, token) => {
  try {
    let res = await Fetch.post('/api/address/', data, token);
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
    console.log('saveAddress', error);
  }
};

export const getAvailableDays = token => async dispatch => {
  try {
    let res = await Fetch.get('/api/available_day/mydays', token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      dispatch({
        type: GET_AVAILABLE_DAYS,
        payload: res.days,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('getAvailableDays', error);
  }
};

export const addAvailableDays = (data, token) => async dispatch => {
  try {
    let res = await Fetch.put('/api/available_day/add', data, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      dispatch({
        type: GET_AVAILABLE_DAYS,
        payload: res.days,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('getAvailableDays', error);
  }
};

export const removeAvailableDays = token => async dispatch => {
  try {
    let res = await Fetch.put('/api/available_day/remove', token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      dispatch({
        type: GET_AVAILABLE_DAYS,
        payload: res.days,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('getAvailableDays', error);
  }
};

export const getBookingSlots = token => async dispatch => {
  try {
    let res = await Fetch.get('/api/bookingSlot/myslots', token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      if (typeof res === 'string') {
        res = [];
      }
      dispatch({
        type: GET_BOOKING_SLOTS,
        payload: res,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('getBookingSlots', error);
  }
};

export const toogleBookingSlot = (id, data, token) => async dispatch => {
  try {
    let res = await Fetch.put(`/api/bookingSlot/toggleActiveSlot/${id}`, data, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      dispatch(getBookingSlots());
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('toogleBookingSlot', error);
  }
};

export const removeBookingSlot = (id, token) => async dispatch => {
  try {
    let res = await Fetch.delete(`/api/bookingSlot/${id}`, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      dispatch(getBookingSlots());
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('toogleBookingSlot', error);
  }
};

export const addBookingSlot = (data, token) => async dispatch => {
  try {
    let res = await Fetch.post('/api/bookingSlot/', data, token);
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      dispatch(getBookingSlots());
    } else {
      const e = await res.json();
      showMessage({
        message: e,
        type: 'warning',
        color: '#000',
      });
    }
  } catch (error) {
    showMessage({
      message: error.message,
      type: 'warning',
    });
    console.log('addBookingSlot', error);
  }
};

export const updateBookingSlot = (id, data, token) => async dispatch => {
  try {
    let res = await Fetch.put(`/api/bookingSlot/${id}`, data, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log(res);
      // dispatch(getBookingSlots());
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('addBookingSlot', error);
  }
};

export const getMyOrders = token => async dispatch => {
  dispatch({
    type: GET_ORDERS,
  });
  try {
    let res = await Fetch.get('/api/orders/artist/myorders', token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      dispatch({
        type: GET_ORDERS_DATA,
        payload: res,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
      dispatch({
        type: GET_ORDERS_ERROR,
        payload: message,
      });
    }
  } catch (error) {
    console.log('getMyOrders', error);
    dispatch({
      type: GET_ORDERS_ERROR,
      payload: 'Something went wrong',
    });
  }
};

export const cancelOrder = async (data, back, token) => {
  console.log(data);
  try {
    let res = await Fetch.post('/api/cancellation', data, token);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log({ res });
      back();
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('cancelOrder', error);
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const rejectOrder = async (id, token) => {
  try {
    let res = await Fetch.put(`/api/orders/reject/${id}`, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
    } else {
      showMessage({
        message: await res.json(),
        type: 'danger',
      });
    }
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const acceptOrder = async (id, body, token) => {
  try {
    let res = await Fetch.put(`/api/orders/accept/${id}`, body, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    } else {
      showMessage({
        message: await res.json(),
        type: 'danger',
      });
    }
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const getOrderTimeline = async (id, token) => {
  try {
    let res = await Fetch.get(`/api/timeline/${id}`, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    } else {
      showMessage({
        message: await res.json(),
        type: 'danger',
      });
    }
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};

export const getFeedbackCategory = token => async dispatch => {
  try {
    let res = await Fetch.get('/api/feedbackcategory/', token);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      dispatch({
        type: 'GET_FEEDBACK_CATEGORY',
        payload: res,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('getFeedbackCategory', error);
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};

export const shareIdea = async (body, func, token) => {
  try {
    let res = await Fetch.postFormData('/api/idea/', body, token);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      func();
    } else {
      showMessage({
        message: await res.json(),
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('shareIdea', error);
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const bugReport = async (body, func, token) => {
  try {
    let res = await Fetch.postFormData('/api/bugreport/', body, token);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      func();
    } else {
      showMessage({
        message: await res.json(),
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('bugReport', error);
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
