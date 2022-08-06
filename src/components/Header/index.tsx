import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Drawer,
  useMediaQuery,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import FlashlightOnOutlinedIcon from '@mui/icons-material/FlashlightOnOutlined';
import { useThemeContext } from '../../context/ThemeContext';
import { useTheme } from '@mui/material';
import { useState } from 'react';
const navItems = ['home', 'sobre', 'projetos', 'contato'];

export const Header = () => {
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const drawer = (
    <Box
      width="200px"
      display="flex"
      style={{ alignItems: 'center', flexDirection: 'column', flexGrow: 1 }}
    >
      <Toolbar />
      <Box flex={1}>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Button>
                <Link style={{ textDecoration: 'none' }} to={`/${item}`}>
                  <ListItemText primary={item} />
                </Link>
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      <IconButton onClick={toggleTheme} color="secondary">
        <FlashlightOnOutlinedIcon />
      </IconButton>
      <Toolbar />
    </Box>
  );

  return (
    <Box height="48px">
      <AppBar component="nav">
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, fontSize: 50, fontFamily: 'Sacramento, cursive' }}>Rc</Typography>
          {matches ? (
            <>
              <Drawer
                open={drawerOpen}
                variant="temporary"
                onClose={handleDrawerToggle}
                anchor="right"
              >
                {drawer}
              </Drawer>
              <Box>
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <IconButton onClick={toggleTheme} color="secondary">
                <FlashlightOnOutlinedIcon />
              </IconButton>
              <Box mr={5}>
                {navItems.map((item, index) => (
                  <Button key={index} color="secondary">
                    <Link style={{ textDecoration: 'none' }} to={`/${item}`}>
                      {item}
                    </Link>
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
