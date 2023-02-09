import { request } from 'axios/index';
import { FETCH_GAMES_REJECTED, FETCH_GAMES_SUCCEEDED } from 'constants/games';

export const rejected = (error) => ({
  type: FETCH_GAMES_REJECTED,
  error,
});

export const succeeded = (response) => ({
  type: FETCH_GAMES_SUCCEEDED,
  response,
});

export const fetchGames = () => (dispatch) => {
  request({ method: 'get', url: '/games' })
    .then((response) => {
      dispatch(succeeded(response.data));
    })
    .catch((error) => {
      dispatch(rejected(error));
    });
};
