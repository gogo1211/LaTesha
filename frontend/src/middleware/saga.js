import { call, put, takeLatest } from 'redux-saga/effects';

import {
  AUTH_LOGIN,
  loginSuccess,
  loginFailure,
  CONTACTS_FETCH,
  fetchContactsSuccess,
  fetchContactsFailure,
} from '../actions';
import { requestLogin, requestFetchContacts } from './apis';

function* authLogin({ payload }) {
  try {
    const data = yield call(requestLogin, payload);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* fetchContacts() {
  try {
    const data = yield call(requestFetchContacts);
    yield put(fetchContactsSuccess(data));
  } catch (error) {
    yield put(fetchContactsFailure(error.message));
  }
}

export default function* latesha() {
  yield takeLatest(AUTH_LOGIN.REQUEST, authLogin);
  yield takeLatest(CONTACTS_FETCH.REQUEST, fetchContacts);
}
