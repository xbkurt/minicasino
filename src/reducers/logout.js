import {
  FETCH_LOGOUT_REJECTED,
  FETCH_LOGOUT_SUCCEEDED,
} from 'constants/logout';

const initialState = {
  pending: false,
  status: null,
  error: {},
};

export const logout = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGOUT_REJECTED:
      return {
        ...state,
        status: action.status,
        pending: false,
        error: action.error,
      };

    case FETCH_LOGOUT_SUCCEEDED:
      return {
        ...state,
        pending: false,
        status: action.response.status,
        error: {},
      };

    default:
      return state;
  }
};
