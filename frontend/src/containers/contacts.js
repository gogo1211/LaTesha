import { connect } from 'react-redux';

import Contacts from '../components/contacts';
import { fetchContactsRequest } from '../actions';

const mapStateToProps = ({ contacts }) => ({
  ...contacts,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
