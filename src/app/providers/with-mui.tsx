import React from 'react';
import { ThemeProvider } from '@mui/system';
import theme from '@shared/config/mui';

export const withMui = (Component: React.FC) => () =>
  (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
