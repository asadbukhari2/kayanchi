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

function get(url, token) {
  console.log('request:get', url);

  const accessToken = store.getState().auth?.token || token;
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

function post(url, body, token) {
  console.log('request:post', url);
  const accessToken = store.getState().auth?.token || token;
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

function postFormData(url, body, token) {
  console.log('request:postFormData', url);

  const accessToken = store.getState().auth?.token || token;
  const headers = {
    authorization: `Bearer ${accessToken}`,
  };
  const requestOptions = {
    method: 'POST',
    headers,
    body: body,
  };
  return fetch(BASE_URL + url, requestOptions).then(res => handleResponse(res));
}

function upload(url, formData) {
  console.log('request:upload', url);
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
  console.log('request:delete', url);
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

function put(url, data, token) {
  console.log('request:put', url, data);
  const accessToken = store.getState().auth?.token || store.getState().auth?.userDetails?.token;
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
  postFormData,
};
