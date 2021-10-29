import React from 'react';
import { Route } from 'react-router-dom';
import { Route as TRoute } from './types';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const RouteWithSubRoutes: React.FC<Omit<TRoute, 'key'>> = ({ isPrivate, isGlobal, ...props }) => {
  if (isPrivate) {
    return <PrivateRoute {...props} />;
  } else if (isGlobal) {
    return <Route {...props} />;
  }

  return <PublicRoute {...props} />;
};
