const initialState = {
  loading: false,
  gigDetails: null,
  error: null,
};

import { PUBLISH_GIG, PUBLISH_GIG_ERROR, PUBLISH_GIG_SUCCESS } from '../constants/constants';

const reducer = (state = initialState, action) => {
  console.log(action, 'reducer_token');
  switch (action.type) {
    case PUBLISH_GIG:
      return {
        ...state,
        loading: true,
      };
    case PUBLISH_GIG_SUCCESS:
      return {
        ...state,
        gigDetails: action.payload.data,
        laoding: false,
      };
    case PUBLISH_GIG_ERROR:
      return {
        ...state,
        error: action.payload.error,
        laoding: false,
      };

    default:
      return state;
  }
};

export default reducer;
