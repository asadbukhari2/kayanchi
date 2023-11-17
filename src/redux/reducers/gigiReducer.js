const initialState = {
  loading: false,
  gigDetails: null,
  error: null,
  gigs: [],
  gigsCount: null,
};

import {
  PUBLISH_GIG,
  PUBLISH_GIG_ERROR,
  PUBLISH_GIG_SUCCESS,
  GIG,
  GET_GIGS_SUCCESS,
  GET_GIGS_ERROR,
} from '../constants/constants';

const reducer = (state = initialState, action) => {
  // console.log(action, 'reducer_token');
  switch (action.type) {
    case PUBLISH_GIG:
      return {
        ...state,
        loading: true,
      };
    case PUBLISH_GIG_SUCCESS:
      return {
        ...state,
        gigDetails: action.payload,
        loading: false,
      };
    case PUBLISH_GIG_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case GIG:
      return {
        ...state,
        loading: true,
      };
    case GET_GIGS_SUCCESS:
      return {
        ...state,
        gigs: action.payload,
        gigsCount: action.payload.length,
        loading: false,
      };
    case GET_GIGS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        gigsCount: 0,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
