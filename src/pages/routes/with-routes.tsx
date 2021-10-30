import React from 'react';
import { RoutesConfig } from './types';

interface PropsWrappedComponent {
  routes?: RoutesConfig[];
}

type TComponent = React.FC<PropsWrappedComponent>;

export const withRoutes = (Component: TComponent, routes: RoutesConfig[] | undefined) => () => {
  if (routes) {
    return <Component routes={routes} />;
  }

  return <Component />;
};
