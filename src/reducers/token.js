import { SET_TOKEN_REJECTED, SET_TOKEN_SUCCEEDED } from 'constants/token';

const initialState = {
  data: null,
};

export const token = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN_REJECTED:
      return {
        ...state,
        data: false,
      };

    case SET_TOKEN_SUCCEEDED:
      return {
        ...state,
        data: true,
      };

    default:
      return state;
  }
};
