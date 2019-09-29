import { connect } from 'react-redux';

import Header from '../components/header';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
