import axios from 'axios';

const _axios = axios.create();

export const request = (requestObject) => {
  requestObject.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...requestObject.headers,
  };
  return _axios(requestObject);
};
