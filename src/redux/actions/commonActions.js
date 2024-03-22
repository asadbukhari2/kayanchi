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
  GET_DISCOVERIES,
  GET_DISCOVERIES_DATA,
  GET_DISCOVERIES_ERROR,
  GET_CONSUMER_BROWSE,
  GET_CONSUMER_BROWSE_DATA,
  GET_CONSUMER_BROWSE_ERROR,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_ERROR,
  GET_CART_ITEM,
  GET_CART_ITEM_LOADING,
  GET_SERVICES_ALL_DATA,
  GET_ARTIST_SLOTS_LOADING,
  GET_ARTIST_SLOTS,
  GET_ARTIST_SLOTS_ERROR,
  CONSUMER_ORDER,
  ORDER_LOADING,
  ORDER,
  ORDER_Error,
  ORDER_BY_ID_LOADING,
  ORDER_BY_ID,
  RESET_ORDER_STATE,
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
    console.log('this is the response in the get services data', res);
    dispatch({
      type: GET_SERVICES_DATA,
      payload: res.services['basic services'],
    });
    dispatch({
      type: GET_SERVICES_ALL_DATA,
      payload: res,
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
export const getServiceById = (id, token) => async dispatch => {
  console.log('callinggetServiceById', id);
  try {
    let res = await Fetch.get(`/api/service/${id}`, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log('this is the response in the get services data', res);
      return res;
    }
  } catch (error) {
    showMessage({
      message: 'smoething went wrong',
      type: 'danger',
    });
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
      console.log('api response address', res);
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
    // console.log('this is the response form the api ', res);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      console.log('this is the res.json', res);
      dispatch({
        type: GET_AVAILABLE_DAYS,
        payload: res.days,
      });
    } else {
      const { message } = await res.json();
      console.log('this is the res.json in the error', res);
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

export const toogleBookingSlots = (id, data, token) => async dispatch => {
  console.log('this is the id', id, 'this is the data', data);
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
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log('this is the response from the add booking slot', res);
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
// GET_ARTIST_SLOTS,
// GET_ARTIST_SLOTS_LOADING,
// GET_ARTIST_SLOTS_ERROR,
export const getArtistBookingSlot = (id, token) => async dispatch => {
  try {
    dispatch({
      type: GET_ARTIST_SLOTS_LOADING,
      payload: true,
    });
    // /api/bookingSlot/artist/9c02be37-1363-4310-9407-532a992ff03e
    let res = await Fetch.get(`/api/bookingSlot/artist/${id}`, token);
    console.log('res===>getArtistBookingSlot', res);
    if (res.status === 200) {
      res = await res.json();
      dispatch({
        type: GET_ARTIST_SLOTS,
        payload: res,
      });
      dispatch({
        type: GET_ARTIST_SLOTS_LOADING,
        payload: false,
      });
      showMessage({
        message: 'artist booking slots get successfully',
        type: 'success',
        color: '#000',
      });
    } else {
      // throw new Error()
      dispatch({
        type: GET_ARTIST_SLOTS_LOADING,
        payload: false,
      });
      showMessage({
        message: 'Something went wrong',
        type: 'warning',
        color: '#000',
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ARTIST_SLOTS_LOADING,
      payload: false,
    });
    dispatch({
      type: GET_ARTIST_SLOTS_ERROR,
      payload: error,
    });
    showMessage({
      message: 'error in the artist get booking slots',
      type: 'error',
      color: '#000',
    });
  }
};
export const updateBookingSlot = (id, data, token) => async dispatch => {
  try {
    let res = await Fetch.put(`/api/bookingSlot/${id}`, data, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log(res);
      dispatch(getBookingSlots());
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
export const deleteBookingSlot = (id, data, token) => async dispatch => {
  try {
    let res = await Fetch.delete(`/api/bookingSlot/${id}`, data, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log(res);
      dispatch(getBookingSlots());
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
    if (res.order) {
      console.log('res in rejectOrder: ', res.order);
      return res.order;
    } else {
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
      } else {
        showMessage({
          message: await res.json(),
          type: 'danger',
        });
      }
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
    console.log('res in acceptOrder: ', res.order);
    if (res.order) {
      return res.order;
    } else {
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        return res;
      } else {
        showMessage({
          message: await res.json(),
          type: 'danger',
        });
      }
    }
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const getLatestOrder = async token => {
  try {
    let res = await Fetch.get('/api/orders/latest_orders/1', token);
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
export const getUserDiscoveries = (token, latitude, longitude) => async dispatch => {
  dispatch({
    type: GET_DISCOVERIES,
  });
  try {
    let res = await Fetch.get(
      `/api/artistview/discover/1/?coords={"longitude": 24.924341, "latitude": 67.254276}`,
      token,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log('this is the data from discoveries', res);
      dispatch({
        type: GET_DISCOVERIES_DATA,
        payload: res,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
      dispatch({
        type: GET_DISCOVERIES_ERROR,
        payload: message,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_DISCOVERIES_ERROR,
      payload: 'Something went wrong',
    });
  }
};
export const getConsumerBrowse = (token, latitude, longitude) => async dispatch => {
  dispatch({
    type: GET_CONSUMER_BROWSE,
  });
  try {
    let res = await Fetch.get(
      `/api/search/browse?coords={"longitude": 24.823916, "latitude": 67.141875}&city=Karachi`,
      token,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      console.log('this is the data from consumer', res);
      dispatch({
        type: GET_CONSUMER_BROWSE_DATA,
        payload: res,
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
      dispatch({
        type: GET_CONSUMER_BROWSE_ERROR,
        payload: message,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_CONSUMER_BROWSE_ERROR,
      payload: 'Something went wrong',
    });
  }
};
export const rateConsumer = async (body, token) => {
  try {
    let res = await Fetch.post('/api/rating/consumer/', body, token);
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
export const startGrooming = async (id, alon, alat, ulon, ulat, token) => {
  try {
    let res = await Fetch.put(
      `/api/orders/startGrooming/${id}?coords={"artist_longitude": ${alon},
      "artist_latitude": ${alat},
      "user_longitude": ${ulon},
      "user_latitude": ${ulat}}`,
      token,
    );
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
export const doneGrooming = async (id, token) => {
  try {
    let res = await Fetch.put(`/api/orders/complete/${id}`, token);
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
export const updateProfilePicture = async (body, token) => {
  try {
    let res = await Fetch.putFormData('/api/users/pfp', body, token);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
    } else {
      showMessage({
        message: await res.json(),
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('updateProfilePicture', error);
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const getCartItems = token => async dispatch => {
  try {
    dispatch({
      type: GET_CART_ITEM_LOADING,
      payload: true,
    });
    let res = await Fetch.get('/api/cart/mycart', token);
    console.log('this is the get cart item status', res.status);
    if (res.status === 200) {
      res = await res.json();
      console.log('loading false krnay kaay liya aur res.json( krna kaay liya', res.cart_items);
      dispatch({
        type: GET_CART_ITEM_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_CART_ITEM,
        payload: res,
      });
    } else {
      dispatch({
        type: GET_CART_ITEM_LOADING,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_CART_ITEM_LOADING,
      payload: false,
    });
    if (error) {
      showMessage({
        message: error.toString(),
        type: 'danger',
      });
    } else {
      showMessage({
        message: 'Something went wrong with get cart items',
        type: 'danger',
      });
    }
  }
};
export const addToCart = (data, token) => async dispatch => {
  console.log('cart main aya aur data', data);
  try {
    dispatch({
      type: ADD_TO_CART_LOADING,
      payload: true,
    });
    let res = await Fetch.post('/api/cartItem/', data, token);
    // console.log('--->', res);
    if (res.status === 200) {
      console.log('add to the cart', res.status);
      dispatch({
        type: ADD_TO_CART_LOADING,
        payload: false,
      });
      res = await res.json();
      console.log('this is the response addToCart', res, res.data);
      dispatch(getCartItems(token));
      showMessage({
        message: 'Add to the cart successfully',
        type: 'success',
      });
    } else {
      dispatch({
        type: ADD_TO_CART_LOADING,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_LOADING,
      payload: false,
    });
    dispatch({
      type: ADD_TO_CART_ERROR,
      payload: error,
    });
    console.log(error);
    if (error) {
      showMessage({
        message: error.toString(),
        type: 'danger',
      });
    } else {
      showMessage({
        message: 'Cart is not update',
        type: 'danger',
      });
    }
  }
};
export const removeFromCart = (data, token) => async dispatch => {
  console.log('cart data', token);
  try {
    dispatch({
      type: GET_CART_ITEM_LOADING,
      payload: true,
    });
    let res = await Fetch.put(`/api/cartItem/dec/${data.id}`, token);
    if (res.status === 200) {
      res = await res.json();
      dispatch({
        type: GET_CART_ITEM_LOADING,
        payload: false,
      });
      console.log('this is the response form the removeFromCart', res);
      dispatch(getCartItems(token));
      showMessage({
        message: 'Item remove successfully',
        type: 'success',
      });
    } else {
      if (res.status === 404) {
        throw new Error('Item not found');
      }
    }
  } catch (error) {
    dispatch({
      type: GET_CART_ITEM_LOADING,
      payload: false,
    });
    console.log('error in the delete item', error);
    if (error) {
      showMessage({
        message: error.toString(),
        type: 'danger',
      });
    } else {
      showMessage({
        message: 'Something went wrong in cart',
        type: 'danger',
      });
    }
  }
};

export const handleConsumerOrder = data => async dispatch => {
  dispatch({
    type: CONSUMER_ORDER,
    payload: data,
  });
};

export const getOrder = token => async dispatch => {
  try {
    dispatch({
      type: ORDER_LOADING,
      payload: true,
    });
    console.log('token hai', token);
    let res = await Fetch.get('/api/orders/consumer/myorders', token);
    if (res.status === 200) {
      res = await res.json();
      console.log('yahn pr a gaya hoon', res);
      dispatch({
        type: ORDER_LOADING,
        payload: false,
      });
      dispatch({
        type: ORDER,
        payload: res,
      });
      showMessage({
        message: 'Active Orders get successfully',
        type: 'success',
      });
    } else {
      if (res.status === 404) {
        throw new Error('Item not found');
      }
    }
    dispatch({
      type: ORDER_LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: ORDER_LOADING,
      payload: false,
    });
    dispatch({
      type: ORDER_Error,
      payload: error,
    });
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const postOrder = (body, token, setIsModalVisible) => async dispatch => {
  console.log('order data', body, body.booking_notes);
  try {
    let res = await Fetch.post('/api/orders/', body, token);
    console.log('post order res', res);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      showMessage({
        message: 'Order Place successfully',
        type: 'success',
      });
      dispatch(getOrder(token));
      dispatch({
        type: 'POST_ORDER_ID',
        payload: res.order.id,
      });
      dispatch({
        type: RESET_ORDER_STATE,
      });
      setIsModalVisible(true);
      return res;
    } else {
      res = await res.json();
      throw new Error(res);
    }
  } catch (error) {
    console.log('error while post the order', error);
    showMessage({
      message: 'something went wrong',
      type: 'danger',
    });
  }
};

export const getConsumerOrder = (token, id) => async dispatch => {
  dispatch({
    type: ORDER_BY_ID_LOADING,
    payload: true,
  });
  try {
    let res = await Fetch.get(`/api/orders/${id}`, token);
    if (res.status === 200) {
      res = await res.json();
      dispatch({
        type: ORDER_BY_ID,
        payload: res,
      });
    }
    dispatch({
      type: ORDER_BY_ID_LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: ORDER_BY_ID_LOADING,
      payload: false,
    });
    console.log('error in the get order by id', token, id);
  }
};
export const getHostingSpot = async token => {
  try {
    let res = await Fetch.get('/api/hostingSpot/myaddresses/', token);
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
    showMessage({
      message: 'Something went wrong',
      type: 'error',
    });
  }
};
export const artistRating = (data, token) => async dispatch => {
  try {
    let res = await Fetch.post('/api/rating/artist/', data, token);
    console.log('res from artist rating', res);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      showMessage({
        message: 'Rate the artist successfully',
        type: 'success',
      });

      return res;
    } else if (res.status === 401) {
      showMessage({
        message: 'Order is already rated',
        type: 'warning',
      });
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
      throw new Error(message ?? 'Something went wrong');
    }
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};

export const updateLatAndLonOrder = (id, body, token) => async dispatch => {
  try {
    let res = await Fetch.put(`/api/orderTrack/${id}`, body, token);
    console.log('updateLatAndLonOrder', res.status);
    if (res.status === 200) {
      res = await res.json();
      return res;
    } else {
      const { message } = await res.json();
      throw new Error(message);
    }
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
export const getOrderLonAndLat = async (id, token) => {
  console.log('get lat long function', token);
  try {
    let res = await Fetch.get(`/api/orderTrack/distance/${id}`, token);
    if (res.status === 200) {
      res = await res.json();
      return res;
    } else {
      const { message } = await res.json();
      throw new Error(message);
    }
  } catch (error) {
    showMessage({
      message: 'Something went wrong',
      type: 'danger',
    });
  }
};
