import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#7165E3',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    common: {
      black: '#25272F',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'DM Sans',
    /**
     * Títulos
     */
    h1: {
      fontFamily: 'DM Sans',
      fontSize: '70px',
    },
    h2: {
      fontFamily: 'DM Sans',
      fontSize: '32px',
    },
    h3: {
      fontFamily: 'DM Sans',
      fontSize: '24px',
    },
    h4: {
      fontFamily: 'DM Sans',
      fontSize: '20px',
    },
    h5: {
      fontFamily: 'DM Sans',
      fontSize: '18px',
    },
    h6: {
      fontFamily: 'DM Sans',
      fontSize: '16px',
    },
  },
});

export default theme;
