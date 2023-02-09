import { FETCH_LOGIN_REJECTED, FETCH_LOGIN_SUCCEEDED } from 'constants/login';

const initialState = {
  pending: false,
  player: {},
  status: null,
  error: {},
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REJECTED:
      const error_message = action.error
        ? action.error.response.data.error
        : {};
      return {
        ...state,
        status: null,
        pending: false,
        error: error_message,
      };

    case FETCH_LOGIN_SUCCEEDED:
      return {
        ...state,
        pending: false,
        status: action.response.status,
        player: action.response.player,
        error: {},
      };

    default:
      return state;
  }
};
