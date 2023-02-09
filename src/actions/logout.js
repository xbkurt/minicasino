import { request } from 'axios/index';
import {
  FETCH_LOGOUT_REJECTED,
  FETCH_LOGOUT_SUCCEEDED,
} from 'constants/logout';
import { SET_TOKEN_REJECTED } from 'constants/token';

export const rejected = (error) => ({
  type: FETCH_LOGOUT_REJECTED,
  status: null,
  error,
});

export const succeeded = (response) => ({
  type: FETCH_LOGOUT_SUCCEEDED,
  response,
});

export const tokenRejected = () => ({
  type: SET_TOKEN_REJECTED,
});

export const clearLogoutStatus = () => (dispatch) => {
  let error = null;
  dispatch(rejected(error));
};

export const logout =
  ({ username }) =>
  (dispatch) => {
    request({
      method: 'POST',
      url: '/logout',
      data: { username },
    })
      .then((response) => {
        dispatch(succeeded(response.data));
        dispatch(tokenRejected());
        localStorage.setItem('localToken', JSON.stringify(false));
      })
      .catch((error) => {
        dispatch(rejected(error));
      });
  };
