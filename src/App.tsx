import React from 'react';
import {Button, List, ListItem, ListItemText, Paper, Typography} from '@material-ui/core';
import useAppStyles from './AppStyles';

export const App = (): React.ReactElement => {
  const classes = useAppStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Typography variant="h6">Нумерология</Typography>

        <List component="nav">
          <ListItem button>
            <ListItemText primary="Люди" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Даты" />
          </ListItem>
        </List>
      </div>

      <Paper className={classes.content}>
        <section className={classes.section}>
          <Button color="primary" variant="contained" onClick={() => alert('click')}>
            Button
          </Button>
        </section>

        <section className={classes.section}>
          <Typography display="inline">Text</Typography>
        </section>
      </Paper>
    </div>
  );
};
