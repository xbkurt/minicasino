import { request } from 'axios/index';
import {
  FETCH_CATEGORIES_REJECTED,
  FETCH_CATEGORIES_SUCCEEDED,
  SET_CATEGORY_ID,
} from 'constants/categories';

export const rejected = (error) => ({
  type: FETCH_CATEGORIES_REJECTED,
  error,
});

export const succeeded = (response) => ({
  type: FETCH_CATEGORIES_SUCCEEDED,
  response,
});

export const categoryIdSetted = (id) => ({
  type: SET_CATEGORY_ID,
  categoryId: id,
});

export const setCategoryId = (id) => (dispatch) => {
  dispatch(categoryIdSetted(id));
};

export const fetchCategories = () => (dispatch) => {
  request({ method: 'get', url: '/categories' })
    .then((response) => {
      dispatch(succeeded(response.data));
    })
    .catch((error) => {
      dispatch(rejected(error));
    });
};
