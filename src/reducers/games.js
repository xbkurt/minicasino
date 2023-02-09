import { FETCH_GAMES_REJECTED, FETCH_GAMES_SUCCEEDED } from 'constants/games';

const initialState = {
  pending: false,
  data: [],
  error: {},
};

export const games = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case FETCH_GAMES_SUCCEEDED:
      return {
        ...state,
        pending: false,
        data: action.response,
        error: {},
      };

    default:
      return state;
  }
};
