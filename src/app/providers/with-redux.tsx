import { store } from '@app/store';
import React from 'react';
import { Provider } from 'react-redux';

export const withRedux = (Component: React.FC) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
