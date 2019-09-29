import * as ActionTypes from '../actions';

const initialState = {
  loading: false,
  isAuthorized: false,
  username: '',
  error: '',
};

function auth(state = initialState, { type, payload, error }) {
  switch (type) {
    case ActionTypes.AUTH_LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ActionTypes.AUTH_LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthorized: payload.authorized,
        username: payload.username,
      };
    case ActionTypes.AUTH_LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
}

export default auth;
