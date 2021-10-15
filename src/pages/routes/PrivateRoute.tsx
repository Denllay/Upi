import React from 'react';
import { useViewer } from '@entities/viewer/model';
import { Route as TRoute } from './types';
import { Redirect, Route } from 'react-router';

export const PrivateRoute: React.FC<Omit<TRoute, 'key' | 'isPrivate'>> = ({ Component, ...props }) => {
  const { isAuth } = useViewer();

  if (isAuth === null) return null;

  return isAuth ? <Route component={Component} {...props} /> : <Redirect to="/login" />;
};
