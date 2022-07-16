import { Box } from '@mui/material';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from '@mui/material';
import { Darktheme } from '../theme/dark';
import { Lighttheme } from '../theme/light';
interface Props {
  children?: React.ReactNode;
}
interface ITheme {
  name: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ITheme);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export const AppThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState<'light' | 'dark'>('light');
  const toggleTheme = useCallback(() => {
    setName((toggle) => (toggle === 'light' ? 'dark' : 'light'));
  }, []);
  const theme = useMemo(() => {
    if (name === 'light') return Lighttheme;
    return Darktheme;
  }, [name]);
  return (
    <ThemeContext.Provider value={{ name, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box height="100vh" width="100vw" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
