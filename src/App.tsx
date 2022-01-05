import React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {Calculator} from './Calculator';

export const App = (): React.ReactElement => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f9fcfd',
    }}
  >
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" component="div">
          Нумерология
        </Typography>
      </Toolbar>
    </AppBar>

    <Box
      sx={{
        height: '1px',
        flexGrow: 1,
        p: 2,
      }}
    >
      <Calculator />
    </Box>
  </Box>
);
