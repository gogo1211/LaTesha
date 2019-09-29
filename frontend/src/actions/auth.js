import createActionType from './utils';

export const AUTH_LOGIN = createActionType('AUTH_LOGIN');

export const loginRequest = payload => ({
  type: AUTH_LOGIN.REQUEST,
  payload,
});

export const loginSuccess = payload => ({
  type: AUTH_LOGIN.SUCCESS,
  payload,
});

export const loginFailure = error => ({
  type: AUTH_LOGIN.FAILURE,
  error,
});
