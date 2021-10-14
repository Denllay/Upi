import React, { lazy } from 'react';
import { useViewer } from '@entities/viewer/model';
import { Redirect, Route, Switch } from 'react-router';

const NotFound = lazy(() => import('./notFound'));
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
        <Route exact path="/404" component={NotFound} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/user/:nick" component={User} />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="404" />
    </Switch>
  );
};
