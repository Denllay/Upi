import { createTheme, ThemeOptions } from '@mui/material';

const commonThemeSettings: ThemeOptions = {
  typography: {
    fontFamily: 'Kulim Park, sans-serif',

    h1: {
      fontFamily: 'Mansalva, cursive',
      fontWeight: 500,
      fontSize: 96,
      color: '#ffffff',
    },

    h2: {
      fontWeight: 600,
      fontSize: 72,
      color: '#ffffff',
    },

    subtitle1: {
      fontWeight: 300,
      fontSize: 18,
    },

    button: {
      fontWeight: 700,
      fontSize: 24,
    },
  },

  palette: {
    primary: {
      main: '#F69595',
    },
    secondary: {
      main: '#6E4343',
    },
    error: {
      main: '#FF0000',
    },

    action: {
      hover: '#FE7070',
    },

    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
  },
};

export default createTheme(commonThemeSettings);
