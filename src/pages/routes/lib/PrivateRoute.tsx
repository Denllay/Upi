import React from 'react';
import { viewerModel } from '@entities/viewer';
import { RouteComponent } from '../types';
import { Redirect, Route } from 'react-router';

export const PrivateRoute: React.FC<RouteComponent> = ({ ...props }) => {
  const { isAuth } = viewerModel.useViewer();

  if (isAuth === null) return null;

  return isAuth ? <Route {...props} /> : <Redirect to="/login" />;
};
