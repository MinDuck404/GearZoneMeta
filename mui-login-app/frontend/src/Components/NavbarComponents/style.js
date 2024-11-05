import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavbarContainer = styled(Box)(({ theme }) => ({
width: '250px',
padding: theme.spacing(2),
  backgroundColor: '#fff', // Màu nền trắng
borderRight: '1px solid #e0e0e0',
display: 'flex',
flexDirection: 'column',
boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
}));

export const CategoryList = styled('ul')({
listStyleType: 'none',
padding: 0,
margin: 0,
});

export const CategoryItem = styled('li')({
margin: '8px 0',
'& a': {
    textDecoration: 'none',
    color: '#f00', // Màu đỏ
    fontWeight: '500',
    '&:hover': {
    textDecoration: 'underline',
    },
},
});

export const StyledButton = styled(Button)({
marginTop: '16px',
  backgroundColor: '#f44336', // Màu đỏ
color: '#fff',
'&:hover': {
    backgroundColor: '#d32f2f', // Đỏ đậm hơn khi hover
},
});
