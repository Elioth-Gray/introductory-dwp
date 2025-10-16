import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
    caption: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
    },
    overline: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      letterSpacing: '0.1em',
    },
  },
  palette: {
    primary: {
      main: '#6B46C1',
      light: '#8B5CF6',
      dark: '#553C9A',
    },
    secondary: {
      main: '#E0E7FF',
      light: '#F8FAFC',
      dark: '#C7D2FE',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
          borderRadius: '0.5rem',
          fontWeight: 600,
          letterSpacing: '0.025em',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
  },
});

export default theme;
