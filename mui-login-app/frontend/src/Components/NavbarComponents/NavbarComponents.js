import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const NavbarContainer = styled(Box)(({ theme }) => ({
width: '250px',
padding: theme.spacing(2),
  backgroundColor: '#fff', // Màu trắng
borderRight: '1px solid #e0e0e0',
display: 'flex',
flexDirection: 'column',
boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
}));

const CategoryList = styled('ul')({
listStyleType: 'none',
padding: 0,
margin: 0,
});

const CategoryItem = styled('li')({
margin: '8px 0',
'& a': {
    textDecoration: 'none',
    color: '#f44336', // Màu đỏ
    fontWeight: '500',
    '&:hover': {
    textDecoration: 'underline',
    },
},
});

const StyledButton = styled(Button)({
marginTop: '16px',
  backgroundColor: '#f44336', // Màu đỏ
color: '#fff',
'&:hover': {
    backgroundColor: '#d32f2f', // Đỏ đậm hơn khi hover
},
});

function NavbarComponent() {
return (
    <NavbarContainer>
    <Typography variant="h6" gutterBottom color="#000">Danh Mục Sản Phẩm</Typography>
    <CategoryList>
        <CategoryItem><a href="#product1">Sản phẩm 1</a></CategoryItem>
        <CategoryItem><a href="#product2">Sản phẩm 2</a></CategoryItem>
        <CategoryItem><a href="#product3">Sản phẩm 3</a></CategoryItem>
        <CategoryItem><a href="#product4">Sản phẩm 4</a></CategoryItem>
    </CategoryList>

    <Typography variant="body1" gutterBottom mt={2} color="#000">Địa Chỉ Nhận Hàng</Typography>
    <FormControlLabel
        control={<Checkbox />}
        label="Địa chỉ 1"
    />
    <FormControlLabel
        control={<Checkbox />}
        label="Địa chỉ 2"
    />

    <Typography variant="body1" gutterBottom mt={2} color="#000">Khoảng Giá</Typography>
    <select style={{ width: '100%', padding: '8px', marginBottom: '16px' }}>
        <option value="0-100">0 - 100,000</option>
        <option value="100-300">100,000 - 300,000</option>
        <option value="300-500">300,000 - 500,000</option>
        <option value="500-1000">500,000 - 1,000,000</option>
    </select>

    <Typography variant="body1" gutterBottom color="#000">Đánh Giá</Typography>
    <Box>
        {[...Array(5)].map((_, index) => (
        <label key={index} style={{ marginRight: '8px' }}>
            <input type="radio" name="rating" value={index + 1} />
            {index + 1} ⭐
        </label>
        ))}
    </Box>

    <StyledButton variant="contained">Áp Dụng</StyledButton>
    </NavbarContainer>
);
}

export default NavbarComponent;
