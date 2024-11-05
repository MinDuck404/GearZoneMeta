// src/Components/CardComponent/CardComponent.js
import { Rating } from '@mui/material';
import React from 'react';
import {
    ProductDescription,
    ProductPrice,
    ProductTitle,
    StyledCard,
    StyledCardContent,
    StyledCardMedia,
} from './style';

function CardComponent({ product }) {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={product.image}
        alt={product.name}
      />
      <StyledCardContent>
        <ProductTitle variant="h6">{product.name}</ProductTitle>
        <Rating
          name="product-rating"
          value={product.rating}
          precision={0.5}
          readOnly
          size="small"
          sx={{ marginY: 1 }}
        />
        <ProductDescription variant="body2">
          {product.description}
        </ProductDescription>
        <ProductPrice variant="subtitle1">{product.price} VND</ProductPrice>
      </StyledCardContent>
    </StyledCard>
  );
}

export default CardComponent;
