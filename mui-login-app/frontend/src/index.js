import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Chú ý là bạn cần import từ react-dom/client
import App from './App'; // Đảm bảo đường dẫn đúng

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root')); // Tạo root từ id 'root'

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
