import { connect } from 'react-redux';

import Login from '../components/login';
import { login } from '../actions';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
