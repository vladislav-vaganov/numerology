import React from 'react';
import ReactDOM from 'react-dom';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';

import {App} from './Components/App';
import {COLORS} from './constants';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
});

const appContainer = document.getElementById('appContainer');

ReactDOM.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  appContainer,
);
