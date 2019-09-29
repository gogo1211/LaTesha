import { connect } from 'react-redux';

import Home from '../components/home';

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Home);
