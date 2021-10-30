import React from 'react';
import { useViewer } from '@entities/viewer/model';
import { RouteComponent } from '../types';
import { Redirect, Route } from 'react-router';

export const PrivateRoute: React.FC<RouteComponent> = ({ ...props }) => {
  const { isAuth } = useViewer();

  if (isAuth === null) return null;

  return isAuth ? <Route {...props} /> : <Redirect to="/login" />;
};
