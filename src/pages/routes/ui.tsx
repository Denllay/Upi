import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routesConfig } from './config';
import { renderListRoutes } from './lib';

const NotFound = lazy(() => import('../notFound'));

export const Routes = () => {
    const routes = renderListRoutes(routesConfig);

    return (
        <Switch>
            {routes} <Route path='*' component={NotFound} />
        </Switch>
    );
};
