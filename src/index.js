import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/* Creating a theme for the MUI components */
const theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4',
      contrastText: '#1D2029',
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Alpha Slab One'].join(','),
  }
});

/* Rendering the App component to the root element in the index.html file. */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
