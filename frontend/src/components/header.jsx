import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = ({ auth }) => (
  <div>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className="title">
          LaTesha
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/contacts" color="inherit">Contacts</Button>
        <Button component={Link} to="/profile" color="inherit">Profile</Button>
        {
          !auth.isAuthorized && <Button component={Link} to="/login" color="inherit">Login</Button>
        }
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  auth: PropTypes.object,
};

export default Header;
