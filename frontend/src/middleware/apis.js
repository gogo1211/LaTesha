import * as axios from 'axios';

import { SERVER_URL } from '../constants';

export const requestLogin = data => (
  axios.post(`${SERVER_URL}/auth/login`, data)
    .then(response => response.data)
);

export const requestFetchContacts = () => (
  axios.get(`${SERVER_URL}/contacts`)
    .then(response => response.data)
);
