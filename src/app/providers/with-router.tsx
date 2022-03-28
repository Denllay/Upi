import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loading } from '@shared/ui';

export const withRouter = (Component: React.FC) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Component />
            </Suspense>
        </BrowserRouter>
    );
