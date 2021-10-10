import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Component: React.FC) => () =>
  (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Component />
      </Suspense>
    </BrowserRouter>
  );
