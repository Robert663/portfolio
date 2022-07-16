import {createTheme} from '@mui/material';
import { yellow } from '@mui/material/colors';

export const Defaulttheme = createTheme({
    palette:{
        primary:{
            main: yellow[400],
        },
        background: {
            paper: '#000000',
            default: '#000000',
          },
    }
})