import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

export const Lighttheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light:orange[300],
      dark: orange[700],
    },
    secondary: {
      main: '#000',
    },
    background: {
      paper: '#ffffff',
      default: '#fff',
    },
  },
});
