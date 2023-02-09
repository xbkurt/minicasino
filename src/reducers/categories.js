import {
  FETCH_CATEGORIES_REJECTED,
  FETCH_CATEGORIES_SUCCEEDED,
  SET_CATEGORY_ID,
} from 'constants/categories';

const initialState = {
  pending: false,
  data: [],
  error: {},
  categoryId: null,
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case FETCH_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        pending: false,
        data: action.response,
        error: {},
      };

    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.categoryId,
      };

    default:
      return state;
  }
};
