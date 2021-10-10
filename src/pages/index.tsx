import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from './auth/login';
import Home from './home';

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Redirect to="/home" />
    </Switch>
  );
};
