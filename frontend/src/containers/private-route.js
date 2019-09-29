import { connect } from 'react-redux';

import PrivateRoute from '../components/private-route';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
