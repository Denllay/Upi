import { PrivateRouter } from '@entities/user/lib';
import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Home = lazy(() => import('./home'));
const Login = lazy(() => import('./auth/login'));
const User = lazy(() => import('./user'));

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />

      <PrivateRouter>
        <Route exact path="/user" component={User} />
      </PrivateRouter>
      <Redirect to="/home" />
    </Switch>
  );
};
