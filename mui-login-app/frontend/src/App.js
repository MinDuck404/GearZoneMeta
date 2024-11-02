import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [showRegister, setShowRegister] = useState(true); // Trạng thái cho đăng ký

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:3000/status', { withCredentials: true });
        setLoggedIn(response.data.loggedIn);
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkLoginStatus();
  }, []);

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div>
      {loggedIn ? (
        <Home setLoggedIn={setLoggedIn} />
      ) : showRegister ? (
        <Register toggleRegister={toggleRegister} />
      ) : (
        <Login toggleRegister={toggleRegister} setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
