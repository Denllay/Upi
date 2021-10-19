import { Loading } from '@shared/ui';
import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

export const withRouter = (Component: React.FC) => () =>
  (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </HashRouter>
  );
