import React from 'react';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import { RoutesConfig } from '../types';
import { withRoutes } from './with-routes';

export const renderListRoutes = (routes: RoutesConfig[]) => {
  const routesListEl = routes.map(({ key, component, routes, ...props }) => {
    const ComponentsWithRoutes = withRoutes(component, routes);

    return <RouteWithSubRoutes key={key} component={ComponentsWithRoutes} {...props} />;
  });

  return routesListEl;
};
