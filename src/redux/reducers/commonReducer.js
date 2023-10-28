const initialState = {
  loading: false,
  categories: null,
};

import { GET_CATEGORIES, GET_CATEGORIES_DATA } from '../constants/constants';

const reducer = (state = initialState, action) => {
  console.log(action, 'reducer_token');
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

    default:
      return state;
  }
};

export default reducer;
