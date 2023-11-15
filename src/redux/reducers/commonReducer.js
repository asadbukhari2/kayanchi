const initialState = {
  loading: false,
  categories: null,
  certLoading: false,
  expLoading: false,
  certificates: [],
  experience: [],
  serviceLoading: false,
  services: [],
};

import {
  GET_CATEGORIES,
  GET_CATEGORIES_DATA,
  GET_CERTIFICATES_DATA,
  GET_EXPERIENCE_DATA,
  GET_SERVICES,
  GET_SERVICES_DATA,
  GET_SERVICES_ERROR,
} from '../constants/constants';

const reducer = (state = initialState, action) => {
  // console.log(action, 'reducer_token');
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.payload,
        laoding: false,
      };

    case 'GET_CERTIFICATES':
      return {
        ...state,
        certLoading: true,
      };
    case GET_CERTIFICATES_DATA:
      return {
        ...state,
        certificates: action.payload,
        certLoading: false,
      };

    case 'GET_EXPERIENCE':
      return {
        ...state,
        expLoading: true,
      };
    case GET_EXPERIENCE_DATA:
      return {
        ...state,
        experience: action.payload,
        expLoading: false,
      };
    case GET_SERVICES:
      return {
        ...state,
        serviceLoading: true,
      };
    case GET_SERVICES_DATA:
      return {
        ...state,
        services: action.payload,
        serviceLoading: false,
      };
    case GET_SERVICES_ERROR:
      return {
        ...state,
        services: [],
        serviceLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
