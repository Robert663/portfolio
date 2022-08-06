import { createTheme } from '@mui/material';
import { cyan, orange } from '@mui/material/colors';
export const Darktheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: orange[300],
      dark: orange[700],
    },
    secondary: {
      main: cyan[800],
      dark: cyan[100],
      light: cyan[50],
    },
    background: {
      paper: '#93acd5',
      default: '#202124',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          border: 'solid 1px #fff', 
          padding: '3px',
          '& .MuiOutlinedInput-root': {

            '& fieldset': {

              borderColor: 'black', 
            },
            '&:hover fieldset': {
              borderColor: 'red', 
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green',
              
            },
          },
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
});
