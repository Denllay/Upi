import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { routesConfig } from './routes';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';

const NotFound = lazy(() => import('../notFound'));

export const Routes = () => {
  const routes = routesConfig.map(({ key, ...props }) => {
    return <RouteWithSubRoutes key={key} {...props} />;
  });

  return (
    <Switch>
      {routes} <Route path="*" component={NotFound} />
    </Switch>
  );
};
