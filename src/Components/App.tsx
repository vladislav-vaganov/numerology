import React from 'react';
import {AppBar, Stack, Toolbar, Typography} from '@mui/material';
import {Calculator} from './Calculator';

export const App = (): React.ReactElement => (
  <Stack spacing={3} sx={{paddingBottom: 3}}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" component="div">
          Нумерология
        </Typography>
      </Toolbar>
    </AppBar>

    <Calculator />
  </Stack>
);
