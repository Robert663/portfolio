import { createTheme } from '@mui/material';
import { cyan, orange } from '@mui/material/colors';

export const Darktheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light:orange[300],
      dark: orange[700],
    },
    secondary:{
        main: cyan[800],
        dark: cyan[100],
        light: cyan[50],
    },
    background: {
      paper: '#000',
      default: '#202124',
    },
  },
});
