import React from 'react';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderComponents = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}> {/* Đặt maxWidth để giới hạn chiều rộng tối đa */}
            <SlickSlider {...settings}>
                {arrImages.map((image, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={image}
                            alt={`slider-${index}`}
                            style={{
                                width: '100%',   // Đặt chiều rộng của ảnh bằng 100% của khung
                                height: 'auto',  // Giữ tỷ lệ khung hình cho ảnh
                                objectFit: 'contain' // Đảm bảo ảnh được chứa trong khung
                            }}
                        />
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
};

export default SliderComponents;
