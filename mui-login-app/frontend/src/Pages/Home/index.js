import { Box, Typography } from '@mui/material';
import React from 'react';
import imageLeft from '../../assets/images/imageLeft.webp';
import imageRight from '../../assets/images/imageRight.webp';
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
import slider4 from '../../assets/images/slider4.webp';
import CardComponent from '../../Components/CardComponents/cardcomponents';
import NavbarComponent from '../../Components/NavbarComponents/NavbarComponents'; // Import NavbarComponent
import SliderComponents from '../../Components/Slider/Slider';
import {
  AdditionalInfo,
  HomeContainer,
  MainContent,
  SideImage,
  SliderContainer,
} from './style';

function Home() {
  const products = [
    { id: 1, name: 'Sản phẩm 1', description: 'Mô tả ngắn gọn sản phẩm 1', price: '200,000', rating: 4.5, image: slider1 },
    { id: 2, name: 'Sản phẩm 2', description: 'Mô tả ngắn gọn sản phẩm 2', price: '350,000', rating: 4, image: slider2 },
    { id: 3, name: 'Sản phẩm 3', description: 'Mô tả ngắn gọn sản phẩm 3', price: '150,000', rating: 3.5, image: slider3 },
    { id: 4, name: 'Sản phẩm 4', description: 'Mô tả ngắn gọn sản phẩm 4', price: '450,000', rating: 5, image: slider4 },
  ];

  return (
    <HomeContainer maxWidth="false">
      {/* Thành phần 4: Nội dung chính */}
      <MainContent>
        {/* Ảnh bên trái */}
        <SideImage>
          <img src={imageLeft} alt="Bên trái" />
        </SideImage>

        {/* Slider ở giữa */}
        <SliderContainer>
          <SliderComponents arrImages={[slider1, slider2, slider3, slider4]} />
        </SliderContainer>

        {/* Ảnh bên phải */}
        <SideImage>
          <img src={imageRight} alt="Bên phải" />
        </SideImage>
      </MainContent>

      {/* Navbar nằm bên trái và hiển thị sản phẩm */}
      <Box display="flex" mt={4}>
        {/* Navbar nằm bên trái */}
        <Box flex="1" display="flex" justifyContent="center" alignItems="flex-start">
          <NavbarComponent />
        </Box>

        {/* Phần hiển thị sản phẩm */}
        <Box display="flex" flexWrap="wrap" flex="3" justifyContent="center">
          {products.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </Box>
      </Box>

      {/* Thành phần 5: Thông tin bổ sung */}
      <AdditionalInfo>
        <Typography variant="h6">Thông Tin Bổ Sung</Typography>
        <Typography variant="body2" mt={1}>
          Đây là phần thông tin bổ sung, ví dụ như các liên kết hữu ích hoặc chi tiết liên hệ.
        </Typography>
      </AdditionalInfo>
    </HomeContainer>
  );
}

export default Home;
