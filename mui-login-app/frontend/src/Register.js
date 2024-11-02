import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function Register({ toggleRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    setError('');
    console.log({ username, email, password });
    // Logic gửi thông tin đăng ký đến API
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
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: 'red' }}>
            ĐĂNG KÝ
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
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ input: { color: 'white' }, label: { color: 'white' } }}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, backgroundColor: 'red' }}
            >
              Đăng Ký
            </Button>
            <Typography variant="body2" mt={2} sx={{ color: 'white' }}>
              Bạn đã có tài khoản? <Button onClick={toggleRegister} sx={{ color: 'red' }}>Đăng Nhập</Button>
            </Typography>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default Register;
