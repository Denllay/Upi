import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { routesConfig } from './routes';

const NotFound = lazy(() => import('../notFound'));

export const Routes = () => {
  const routes = routesConfig.map(({ key, isPrivate, ...props }) => {
    if (isPrivate) {
      return <PrivateRoute key={key} {...props} />;
    }
    return <PublicRoute key={key} {...props} />;
  });

  return (
    <Switch>
      {routes} <Route path="*" component={NotFound} />
    </Switch>
  );
};
