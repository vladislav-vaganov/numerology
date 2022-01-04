import {createStyles, makeStyles, Theme} from '@material-ui/core';

declare type classNames = 'root' | 'sidebar' | 'content' | 'section';

export default makeStyles<Theme, Record<never, never>, classNames>((theme) =>
  createStyles({
    root: {
      display: 'flex',
      boxSizing: 'border-box',
      padding: theme.spacing(2),
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f9fcfd',
    },
    sidebar: {
      height: '100%',
      width: '20%',
    },
    content: {
      marginLeft: theme.spacing(2),
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    section: {
      margin: theme.spacing(2),
    },
  }),
);
