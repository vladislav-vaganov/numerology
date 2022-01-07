import React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {Calculator} from './Calculator';

export const App = (): React.ReactElement => (
  <Box
    sx={{
      width: '100%',
    }}
  >
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" component="div">
          Нумерология
        </Typography>
      </Toolbar>
    </AppBar>

    <Calculator />
  </Box>
);
