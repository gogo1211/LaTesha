import { connect } from 'react-redux';

import Profile from '../components/profile';

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Profile);
