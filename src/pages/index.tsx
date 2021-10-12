import { useViewer } from '@entities/viewer/model';
import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Home = lazy(() => import('./home'));
const Login = lazy(() => import('./auth/login'));
const User = lazy(() => import('./user'));

export const Routing = () => {
  const { isAuth } = useViewer();

  if (!isAuth) {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Redirect to="login" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/user" component={User} />
      <Redirect to="/user" />
    </Switch>
  );
};
