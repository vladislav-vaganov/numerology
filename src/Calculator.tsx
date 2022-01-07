import React from 'react';
import {Box, Button, Typography} from '@mui/material';

export const Calculator = (): React.ReactElement => (
  <Box sx={{width: '100%', p: {xs: 2, sm: 3}}}>
    <Box sx={{my: 2}}>
      <Button color="primary" variant="contained" onClick={() => alert('click')}>
        Button
      </Button>
    </Box>

    <Box sx={{my: 2}}>
      <Typography display="inline">Text</Typography>
    </Box>
  </Box>
);
