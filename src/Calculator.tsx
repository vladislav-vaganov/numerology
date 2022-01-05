import React from 'react';
import {Box, Button, Paper, Typography} from '@mui/material';

export const Calculator = (): React.ReactElement => (
  <Box sx={{display: 'flex', flexDirection: 'row', height: '100%'}}>
    {/* <Box sx={{height: '100%', width: '20%', overflow: 'auto'}}>
      <Typography variant="h6">Люди</Typography>

      <List component="nav">
        <ListItem button>
          <ListItemText primary="Иванов Петр" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Петров Иван" />
        </ListItem>
      </List>
    </Box> */}

    <Paper sx={{p: 2, flexGrow: 1, height: '100%', overflow: 'auto'}}>
      <Box sx={{m: 2}}>
        <Button color="primary" variant="contained" onClick={() => alert('click')}>
          Button
        </Button>
      </Box>

      <Box sx={{m: 2}}>
        <Typography display="inline">Text</Typography>
      </Box>
    </Paper>
  </Box>
);
