import React from 'react';
import { RouteComponent } from '../types';
import { Redirect, Route } from 'react-router';
import { useViewer } from '@entities/viewer/model';

export const PublicRoute: React.FC<RouteComponent> = ({ ...props }) => {
  const { isAuth } = useViewer();

  if (isAuth === null) return null;

  return !isAuth ? <Route {...props} /> : <Redirect to="/404" />;
};
