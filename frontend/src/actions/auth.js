import { createAction, createActionType } from './utils';

export const AUTH_LOGIN = createActionType('AUTH_LOGIN');

export const login = data => createAction({
  type: AUTH_LOGIN,
  action: () => checkLogin(data),
});

const checkLogin = ({ username, password }) => {
  return true;
};
