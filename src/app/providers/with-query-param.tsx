import React from 'react';
import { Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

export const withQueryParam = (Component: React.FC) => () =>
  (
    <QueryParamProvider ReactRouterRoute={Route}>
      <Component />
    </QueryParamProvider>
  );
