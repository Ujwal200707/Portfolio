import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
} from '@mui/material';
import { Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useThemeMode } from '../hooks/useThemeMode';

const AppBar = () => {
  const theme = useTheme();
  const { mode, toggleMode } = useThemeMode();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MuiAppBar position="fixed" sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Deevi Ujwal
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              onClick={() => handleNavClick(item.href)}
              sx={{ textTransform: 'none' }}
            >
              {item.label}
            </Button>
          ))}
          <IconButton onClick={toggleMode} color="inherit">
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>

        {/* Mobile Navigation */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton onClick={toggleMode} color="inherit">
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
