// src/Components/CardComponent/style.js
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)({
maxWidth: 345,
margin: 16,
boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
transition: 'transform 0.3s ease',
'&:hover': {
    transform: 'scale(1.05)',
},
});

export const StyledCardMedia = styled(CardMedia)({
height: 140,
objectFit: 'cover',
});

export const StyledCardContent = styled(CardContent)({
textAlign: 'center',
paddingBottom: 16,
});

export const ProductTitle = styled(Typography)({
fontWeight: 'bold',
color: '#333',
});

export const ProductDescription = styled(Typography)({
fontSize: '0.9rem',
color: '#777',
marginTop: 8,
});

export const ProductPrice = styled(Typography)({
fontSize: '1.1rem',
fontWeight: 'bold',
color: '#e91e63',
marginTop: 8,
});
