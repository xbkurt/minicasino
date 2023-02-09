import { request } from 'axios/index';
import { FETCH_LOGIN_REJECTED, FETCH_LOGIN_SUCCEEDED } from 'constants/login';
import { SET_TOKEN_SUCCEEDED } from 'constants/token';

export const rejected = (error) => ({
  type: FETCH_LOGIN_REJECTED,
  status: null,
  player: null,
  error,
});

export const succeeded = (response) => ({
  type: FETCH_LOGIN_SUCCEEDED,
  response,
});

export const tokenSucceeded = () => ({
  type: SET_TOKEN_SUCCEEDED,
});

export const clearLoginStatus = () => (dispatch) => {
  let error = null;
  dispatch(rejected(error));
};

export const login =
  ({ username, password }) =>
  (dispatch) => {
    request({
      method: 'POST',
      url: '/login',
      data: { username, password },
    })
      .then((response) => {
        dispatch(succeeded(response.data));
        dispatch(tokenSucceeded());
        localStorage.setItem('userInfo', JSON.stringify(response.data.player));
        localStorage.setItem('localToken', JSON.stringify(true));
      })
      .catch((error) => {
        dispatch(rejected(error));
      });
  };
