import { call, put, takeLatest } from 'redux-saga/effects';

import {
  AUTH_LOGIN,
  loginSuccess,
  loginFailure,
} from '../actions';
import { requestLogin } from './apis';

function* authLogin({ payload }) {
  try {
    const data = yield call(requestLogin, payload);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export default function* latesha() {
  yield takeLatest(AUTH_LOGIN.REQUEST, authLogin);
}
