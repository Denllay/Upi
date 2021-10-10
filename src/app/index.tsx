import React from 'react';
import { Routing } from '@pages/index';
import { withProviders } from './providers';
import './style/index.scss';
const App = () => {
  return <Routing />;
};

export default withProviders(App);
