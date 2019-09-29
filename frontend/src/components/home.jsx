import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: 100,
    textAlign: 'center',
  },
}));

const Home = ({ auth }) => {
  const classes = useStyles();
  return (
    <div className={classes.heading}>
      <h1>
        Welcome to LaTesha
        { auth.username ? `, ${auth.username}` : ''}
      </h1>
      {
        !auth.isAuthorized && <Button component={Link} to="/login" variant="contained" color="primary">Login</Button>
      }
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Home;
