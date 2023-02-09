import { combineReducers } from 'redux';

import { login } from 'reducers/login';
import { logout } from 'reducers/logout';
import { categories } from 'reducers/categories';
import { games } from 'reducers/games';
import { token } from 'reducers/token';

const rootReducer = combineReducers({
  login,
  logout,
  categories,
  games,
  token,
});

export default rootReducer;
