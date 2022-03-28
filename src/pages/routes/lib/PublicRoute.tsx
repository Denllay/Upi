import React from 'react';
import { Redirect, Route } from 'react-router';

import { viewerModel } from '@entities/viewer';

import { RouteComponent } from '../types';

export const PublicRoute: React.FC<RouteComponent> = ({ ...props }) => {
    const { isAuth } = viewerModel.useViewer();

    if (isAuth === null) return null;

    return !isAuth ? <Route {...props} /> : <Redirect to='/404' />;
};
