import { AccountCircle, Build, House, Info, LocalOffer, Login, Redeem, ShoppingCart } from '@mui/icons-material'; // Import icon từ thư viện MUI
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import Navigation from './Navigation';
import SearchBox from './SearchBox';

const Header = () => {
    return (
        <>
            {/* Thành phần 1: Ảnh */}
            <Box display="flex" justifyContent="center" alignItems="center" py={2} sx={{ backgroundColor: 'grey.100', margin: 0 }}>
                <img src="/Image/hometop.png" alt="Header" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover', margin: 0 }} />
            </Box>

            {/* Thành phần 2: Thanh chức năng */}
            <AppBar position="static" sx={{ mt: 2, margin: 0, backgroundColor: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
                <IconButton edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }}>
                    <img src="/Image/icon.png" alt="Home Icon" style={{ width: '48px', height: '48px' }} />
                </IconButton>

                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
                    <Navigation />
                    <SearchBox />
                    <Box sx={{ mr: 2 }}></Box>

                    <Button color="inherit" size="small" sx={{ backgroundColor: '#DD0000', mr: 2, fontSize: '12px', '&:hover': { backgroundColor: '#BB0000' } }}>
                        <LocalOffer sx={{ mr: 1 }} /> {/* Icon Tra cứu đơn hàng */}
                        Tra cứu đơn hàng
                    </Button>
                    <Button color="inherit" size="small" sx={{ backgroundColor: '#DD0000', mr: 2, fontSize: '12px', '&:hover': { backgroundColor: '#BB0000' } }}>
                        <ShoppingCart sx={{ mr: 1 }} /> {/* Icon Giỏ hàng */}
                        Giỏ hàng
                    </Button>
                    
                    {/* Nút hình người */}
                    <Button color="inherit" size="small" sx={{ backgroundColor: '#DD0000', mr: 2, fontSize: '12px', '&:hover': { backgroundColor: '#BB0000' } }}>
                        <AccountCircle sx={{ mr: 1 }} /> {/* Icon Hình người */}
                        Tài khoản
                    </Button>

                    <Button color="inherit" size="small" sx={{ backgroundColor: '#DD0000', mr: 2, fontSize: '12px', '&:hover': { backgroundColor: '#BB0000' } }}>
                        <Login sx={{ mr: 1 }} /> {/* Icon Đăng nhập */}
                        Đăng nhập
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>

            {/* Thành phần 3: Một vài chức năng thêm */}
            <Box display="flex" justifyContent="center" alignItems="center" py={4} sx={{ backgroundColor: '#EE0000', margin: 0 }}>
                <Button variant="contained" sx={{ mx: 1, backgroundColor: '#DD0000', '&:hover': { backgroundColor: '#CC0000' } }} onClick={() => alert('Săn Voucher')}>
                    <Redeem sx={{ mr: 1 }} /> {/* Icon Săn Voucher */}
                    Săn Voucher
                </Button>
                <Button variant="contained" sx={{ mx: 1, backgroundColor: '#DD0000', '&:hover': { backgroundColor: '#CC0000' } }} onClick={() => alert('Tin công nghệ')}>
                    <Info sx={{ mr: 1 }} /> {/* Icon Tin công nghệ */}
                    Tin công nghệ
                </Button>
                <Button variant="contained" sx={{ mx: 1, backgroundColor: '#DD0000', '&:hover': { backgroundColor: '#CC0000' } }} onClick={() => alert('Dịch vụ sửa chữa')}>
                    <Build sx={{ mr: 1 }} /> {/* Icon Dịch vụ sửa chữa */}
                    Dịch vụ sửa chữa
                </Button>
                <Button variant="contained" sx={{ mx: 1, backgroundColor: '#DD0000', '&:hover': { backgroundColor: '#CC0000' } }} onClick={() => alert('Dịch vụ kỹ thuật tại nhà')}>
                    <House sx={{ mr: 1 }} /> {/* Icon Dịch vụ kỹ thuật tại nhà */}
                    Dịch vụ kỹ thuật tại nhà
                </Button>
                <Button variant="contained" sx={{ mx: 1, backgroundColor: '#DD0000', '&:hover': { backgroundColor: '#CC0000' } }} onClick={() => alert('Thu cũ đổi mới VGA')}>
                    <Redeem sx={{ mr: 1 }} /> {/* Icon Thu cũ đổi mới VGA */}
                    Thu cũ đổi mới VGA
                </Button>
                <Button variant="contained" sx={{ mx: 1, backgroundColor: '#DD0000', '&:hover': { backgroundColor: '#CC0000' } }} onClick={() => alert('Tra cứu bảo hành')}>
                    <Info sx={{ mr: 1 }} /> {/* Icon Tra cứu bảo hành */}
                    Tra cứu bảo hành
                </Button>
            </Box>
        </>
    );
}

export default Header;
