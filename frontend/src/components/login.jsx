import React from 'react';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import Loader from './loader';

const styles = {
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
  paper: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 1,
    textAlign: 'center',
  },
  fildset: {
    border: 'none',
  },
  progress: {
    marginTop: 10,
  },
  error: {
    color: 'red',
  },
  submit: {
    marginTop: 16,
  },
};

const ErrorMessage = ({ error }) => <h3 style={{ color: 'red' }}>{ error }</h3>;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { auth: { error, isAuthorized } } = nextProps;
    if (error) {
      this.setState({ error: 'Invalid credential.' });
    }
    if (isAuthorized) {
      this.setSession();
    }
  }

  setSession = () => {
    const { username } = this.state;
    const { history } = this.props;
    // eslint-disable-next-line no-undef
    localStorage.setItem('latesha', JSON.stringify({
      username,
      isAuthorized: true,
    }));
    history.replace('/profile');
  }

  handleChange = name => event => this.setState({ [name]: event.target.value, error: '' });

  submit = (event) => {
    event.preventDefault();

    const { login } = this.props;
    const { username, password } = this.state;

    this.setState({ error: '' });

    if (!username) {
      this.setState({ error: 'Username is required.' });
      return;
    }

    if (!password) {
      this.setState({ error: 'Password is required.' });
      return;
    }

    login({
      username,
      password,
    });
  }

  render() {
    const { classes, auth } = this.props;
    const { username, password, error } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form}>
            <fieldset className={classes.fildset} disabled={auth.loading}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={username}
                onChange={this.handleChange('username')}
                autoComplete="name"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={this.handleChange('password')}
                autoComplete="current-password"
              />
              <Loader loading={auth.loading} />
              <ErrorMessage error={error} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.submit}
                disabled={auth.loading}
              >
                Sign In
              </Button>
            </fieldset>
          </form>
        </div>
      </Container>
    );
  }
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles)(Login));
