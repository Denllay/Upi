import { Loading } from '@shared/ui';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Component: React.FC) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
