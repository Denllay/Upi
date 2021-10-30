import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routesConfig } from './routes';
import { RouteWithSubRoutes } from './customRoutes/RouteWithSubRoutes';
import { withRoutes } from './with-routes';

const NotFound = lazy(() => import('../notFound'));

export const Routes = () => {
  const routes = routesConfig.map(({ key, component, routes, ...props }) => {
    const ComponentsWithRoutes = withRoutes(component, routes);

    return <RouteWithSubRoutes key={key} component={ComponentsWithRoutes} {...props} />;
  });

  return (
    <Switch>
      {routes} <Route path="*" component={NotFound} />
    </Switch>
  );
};
