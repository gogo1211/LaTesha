import createActionType from './utils';

export const CONTACTS_FETCH = createActionType('CONTACTS_FETCH');

export const fetchContactsRequest = () => ({
  type: CONTACTS_FETCH.REQUEST,
});

export const fetchContactsSuccess = payload => ({
  type: CONTACTS_FETCH.SUCCESS,
  payload,
});

export const fetchContactsFailure = error => ({
  type: CONTACTS_FETCH.FAILURE,
  error,
});
