import { AppBar, Box, Button, Container, IconButton, TextField, Toolbar, Typography } from '@mui/material';

import axios from 'axios';
import React from 'react';

function Home({ setLoggedIn }) {
  const handleLogout = async () => {
    await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
    setLoggedIn(false);
  };

  return (
<Container maxWidth="" sx={{ margin: 0 }}>
  {/* Thành phần 1: Ảnh */}
  <Box display="flex" justifyContent="center" alignItems="center" py={2} sx={{ backgroundColor: 'grey.100', margin: 0 }}>
    <img src="/Image/hometop.png" alt="Header" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover', margin: 0 }} />
  </Box>

  {/* Thành phần 2: Thanh chức năng */}
  <AppBar position="static" color="primary" sx={{ mt: 2, margin: 0 }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'center', margin: 0 }}>
      {/* Nút Home với hình ảnh icon */}
      <IconButton edge="start" color="inherit" aria-label="home" sx={{ mr: 2, margin: 0 }}>
        <img src="/path/to/icon.png" alt="Home Icon" style={{ width: '24px', height: '24px' }} />
      </IconButton>

      {/* Nút Hiện Danh Mục */}
      <Button color="inherit" sx={{ mr: 2, margin: 0 }}>
        Danh Mục
      </Button>

      {/* Ô Tìm Kiếm Sản Phẩm */}
      <TextField
        variant="outlined"
        placeholder="Tìm kiếm sản phẩm..."
        size="small"
        sx={{
          backgroundColor: 'white',
          borderRadius: '4px',
          width: '30%',
          mr: 2,
          margin: 0,
        }}
      />

      {/* Nút Tra cứu đơn hàng và Giỏ hàng */}
      <Button color="inherit" sx={{ mr: 2, margin: 0 }}>Tra cứu đơn hàng</Button>
      <Button color="inherit" sx={{ mr: 2, margin: 0 }}>Giỏ hàng</Button>
      <Button color="inherit" onClick={handleLogout} sx={{ margin: 0 }}>Đăng nhập</Button>
    </Toolbar>
  </AppBar>

  {/* Thành phần 3: Một vài chức năng thêm */}
  <Box display="flex" justifyContent="center" py={4} sx={{ backgroundColor: 'grey.200', margin: 0 }}>
    <Typography variant="h6">Các Chức Năng Thêm</Typography>
  </Box>

  {/* Thành phần 4: Nội dung chính */}
  <Box display="flex" flexDirection="column" alignItems="center" py={4} sx={{ backgroundColor: 'grey.300', margin: 0 }}>
    <Typography variant="h4">Nội Dung Chính</Typography>
    <Typography variant="body1" mt={2}>
      Đây là phần nội dung chính của trang, có thể bao gồm văn bản hoặc các mục khác mà bạn muốn hiển thị.
    </Typography>
  </Box>

  {/* Thành phần 5: Thông tin bổ sung */}
  <Box display="flex" flexDirection="column" alignItems="center" py={4} sx={{ backgroundColor: 'grey.400', margin: 0 }}>
    <Typography variant="h6">Thông Tin Bổ Sung</Typography>
    <Typography variant="body2" mt={1}>
      Đây là phần thông tin bổ sung, ví dụ như các liên kết hữu ích hoặc chi tiết liên hệ.
    </Typography>
  </Box>
</Container>

  );
}

export default Home;
