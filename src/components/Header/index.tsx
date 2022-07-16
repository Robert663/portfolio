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
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import FlashlightOnOutlinedIcon from '@mui/icons-material/FlashlightOnOutlined';
import { useThemeContext } from '../../context/ThemeContext';
import { useTheme } from '@mui/material';
import { useState } from 'react';
const navItems = ['home', 'sobre', 'certificados', 'projetos', 'contato'];

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
      style={{ alignItems: 'center', flexDirection: 'column' }}
    >
      <Toolbar />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link to={`/${item}`}>
              <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Toolbar />
      <Box>
        <IconButton onClick={toggleTheme} color="secondary">
          <FlashlightOnOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box height='48px'>
      <AppBar component="nav">
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1 }}>Teste</Typography>
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
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton onClick={toggleTheme} color="secondary">
                <FlashlightOnOutlinedIcon />
              </IconButton>
              <Box>
                {navItems.map((item, index) => (
                  <Button key={index} color="secondary">
                    <Link to={`/${item}`}>
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
