import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: 100,
    textAlign: 'center',
  },
}));

const Profile = ({ auth }) => {
  const classes = useStyles();
  return (
    <div className={classes.heading}>
      <h2>
        Logged in as:
        { auth.username }
      </h2>
    </div>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Profile;
