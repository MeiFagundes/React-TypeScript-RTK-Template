import React, { FC } from 'react';
import { Router } from '../routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/theme';
import './App.css';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
