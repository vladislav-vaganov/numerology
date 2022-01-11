import React from 'react';
import ReactDOM from 'react-dom';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {LocalizationProvider} from '@mui/lab';
import ruLocale from 'date-fns/locale/ru';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {App} from './Components/App';

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
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </>,
  appContainer,
);
