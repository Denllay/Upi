import React from 'react';
import { Route as TRoute } from './types';
import { Redirect, Route } from 'react-router';
import { useViewer } from '@entities/viewer/model';

export const PublicRoute: React.FC<Omit<TRoute, 'key' | 'isPrivate'>> = ({ Component, ...props }) => {
  const { isAuth } = useViewer();

  if (isAuth === null) return null;

  return !isAuth ? <Route component={Component} {...props} /> : <Redirect to="/404" />;
};
