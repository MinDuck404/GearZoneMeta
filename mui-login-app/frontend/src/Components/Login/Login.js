import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function Login({ setLoggedIn, toggleRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Đăng nhập thành công
        console.log('Logged in:', data);
        setLoggedIn(true); // Thay đổi trạng thái đăng nhập
        // Có thể lưu thông tin người dùng vào local storage hoặc state
      } else {
        // Đăng nhập thất bại
        setError(data.msg || 'Login failed');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(/Image/bg3.png)`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 1,
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Overlay tối nhẹ
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="xs">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding={4}
          borderRadius={2}
          boxShadow={3}
          sx={{
            backgroundColor: 'rgba(31, 31, 31, 0.8)',
            border: '2px solid red',
            width: '100%',
            position: 'relative',
            top: '100px',
            left: '50px',
            transform: 'translate(-20%, -10%)',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: 'red' }}>
            ĐĂNG NHẬP
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ input: { color: 'white' }, label: { color: 'white' } }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ input: { color: 'white' }, label: { color: 'white' } }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={<span style={{ color: 'white' }}>Remember me</span>}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, backgroundColor: 'red' }}
            >
              Đăng Nhập
            </Button>
            <Typography variant="body2" mt={2} sx={{ color: 'white' }}>
              Bạn chưa có tài khoản? <Button onClick={toggleRegister} sx={{ color: 'red' }}>Đăng Ký</Button>
            </Typography>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
