import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './containers/private-route';
import Header from './containers/header';
import Home from './components/home';
import Login from './containers/login';
import Contacts from './components/contacts';
import Profile from './components/profile';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <PrivateRoute exact path="/contacts" component={Contacts} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
