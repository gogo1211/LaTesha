import * as ActionTypes from '../actions';

const initialState = {
  loading: false,
  contacts: [],
  error: '',
};

const contacts = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case ActionTypes.CONTACTS_FETCH.REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ActionTypes.CONTACTS_FETCH.SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: payload,
      };
    case ActionTypes.CONTACTS_FETCH.FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default contacts;
