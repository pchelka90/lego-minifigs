import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

interface IProps {
  isDarkModeActive: boolean;
  setIsDarkModeActive: Function;
}

const Navbar = ({ isDarkModeActive, setIsDarkModeActive }: IProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar color='secondary' position='static' enableColorOnDark>
      <Toolbar>
        <IconButton edge='end' aria-label='menu' sx={{ mr: 2 }}>
          <Switch
            checked={isDarkModeActive}
            onChange={() => setIsDarkModeActive(!isDarkModeActive)}
          />
        </IconButton>
      </Toolbar>
      <Typography
        style={{
          textAlign: 'center',
          marginTop: '-50px',
          marginBottom: '20px',
        }}
        variant='h4'
      >
        Lego loot box of Harry Potter minifigs
      </Typography>
    </AppBar>
  </Box>
);

export default Navbar;
