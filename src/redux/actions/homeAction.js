import { showMessage } from 'react-native-flash-message';
import { Fetch } from '../../utils/APIservice';

export const GET_INSIGHTS = async limit => {
  try {
    let res = await Fetch.get(`/api/insights/${limit}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
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
export const GET_ORDERS_SUMMARY = async id => {
  try {
    let res = await Fetch.get(`/api/artistview/booking_summary/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
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
export const GET_ARTIST_METRICES = async id => {
  try {
    let res = await Fetch.get(`/api/artistview/metrices/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
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
export const GET_ARTIST_EARNING = async (limit, value) => {
  try {
    const url =
      value === 0
        ? `/api/earning/${limit}`
        : value === 1
        ? `/api/earning/booking/${limit}`
        : value === 2
        ? `/api/earning/hosting/${limit}`
        : '';
    let res = await Fetch.get(url);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    showMessage({
      message: 'something went wrong',
      type: 'danger',
    });
  }
};
export const GET_ARTIST_COMMISSION = async () => {
  try {
    let res = await Fetch.get('/api/commission/mycommissions');
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    } else {
      const { message } = await res.json();
      showMessage({
        message: message,
        type: 'danger',
      });
    }
  } catch (error) {
    showMessage({
      message: 'something went wrong',
      type: 'danger',
    });
  }
};
