import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline} from '@mui/material';
import {App} from './App';

const appContainer = document.getElementById('appContainer');
ReactDOM.render(
  <>
    <CssBaseline />
    <App />
  </>,
  appContainer,
);
