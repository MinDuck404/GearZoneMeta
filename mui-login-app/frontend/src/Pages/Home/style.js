// src/Components/Home/style.js
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeContainer = styled(Container)(({ theme }) => ({
padding: 0,
margin: 0,
}));

export const MainContent = styled(Box)({
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
minHeight: '400px',
});

export const SideImage = styled(Box)({
width: '10%',
minHeight: '400px',
position: 'relative',
'& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
},
});

export const SliderContainer = styled(Box)({
width: '80%',
minHeight: '400px',
position: 'relative',
marginLeft: '0px',
});

export const ProductDisplay = styled(Box)({
display: 'flex',
justifyContent: 'center',
flexWrap: 'wrap',
marginTop: '16px',
});

export const AdditionalInfo = styled(Box)(({ theme }) => ({
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
minHeight: '100vh',
backgroundColor: theme.palette.grey[400],
padding: 0,
margin: 0,
}));
