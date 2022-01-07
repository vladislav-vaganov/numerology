import React from 'react';
import ReactDOM from 'react-dom';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {App} from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00838f',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const appContainer = document.getElementById('appContainer');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  appContainer,
);
