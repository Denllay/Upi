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
      fontFamily: 'Mansalva, cursive',
      fontWeight: 600,
      fontSize: 72,
      color: '#ffffff',
    },

    h3: {
      fontFamily: 'Mansalva, cursive',
      fontWeight: 500,
      fontSize: 60,
      color: '#ffffff',
    },
    h5: {
      fontWeight: 600,
      fontSize: 36,
    },

    subtitle1: {
      fontWeight: 300,
      fontSize: 18,
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: 14,
    },
    button: {
      fontWeight: 300,
      fontSize: 15,
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

  components: {
    MuiButton: {
      variants: [
        {
          props: { size: 'large' },
          style: {
            padding: '14px 60px',
          },
        },
        {
          props: { variant: 'text' },
          style: {
            padding: 2,
            justifyContent: 'flex-start',
            borderRadius: '0 0 5px 5px',
          },
        },
      ],
    },
  },
};

export default createTheme(commonThemeSettings);
