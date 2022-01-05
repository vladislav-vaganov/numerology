import React from 'react';
import {Box, Button, List, ListItem, ListItemText, Paper, Typography} from '@mui/material';

export const App = (): React.ReactElement => (
  <Box
    sx={{
      display: 'flex',
      boxSizing: 'border-box',
      p: 2,
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f9fcfd',
    }}
  >
    <Box sx={{height: '100%', width: '20%'}}>
      <Typography variant="h6">Нумерология</Typography>

      <List component="nav">
        <ListItem button>
          <ListItemText primary="Люди" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Даты" />
        </ListItem>
      </List>
    </Box>

    <Paper sx={{ml: 2, flexGrow: 1, p: 2}}>
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
