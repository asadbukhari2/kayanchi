import { baseURL } from '../utils/constants';
import { store } from '../redux/reducers';

let BASE_URL = baseURL;

let trigger = false;
function handleResponse(response) {
  if (response.status === 401 && !trigger && store.getState().auth?.token) {
    trigger = true;
  }
  return response;
}

function get(url) {
  const accessToken = store.getState().auth?.token;
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${accessToken}`,
  };
  const requestOptions = {
    method: 'GET',
    headers,
  };
  return fetch(BASE_URL + url, requestOptions).then(res => handleResponse(res));
}

function post(url, body) {
  const accessToken = store.getState().auth?.token;
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${accessToken}`,
  };
  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  };
  return fetch(BASE_URL + url, requestOptions).then(res => handleResponse(res));
}

function upload(url, formData) {
  const accessToken = store.getState().auth?.token;
  const headers = {
    authorization: `Bearer ${accessToken}`,
  };
  const requestOptions = {
    method: 'POST',
    headers,
    body: formData,
  };
  return fetch(BASE_URL + url, requestOptions).then(res => handleResponse(res));
}

function _delete(url) {
  const accessToken = store.getState().auth?.token;
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${accessToken}`,
  };
  const requestOptions = {
    method: 'DELETE',
    headers,
  };
  return fetch(BASE_URL + url, requestOptions).then(res => handleResponse(res));
}

function put(url, data) {
  const accessToken = store.getState().auth?.token;
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${accessToken}`,
  };
  const requestOptions = {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  };
  return fetch(BASE_URL + url, requestOptions).then(res => handleResponse(res));
}

export const Fetch = {
  get,
  post,
  upload,
  delete: _delete,
  put,
};
