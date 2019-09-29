import { connect } from 'react-redux';

import Login from '../components/login';
import { loginRequest } from '../actions';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
