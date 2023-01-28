import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Autoplay } from "swiper";

const MainBannerSlider = () => {
  const banners = [
    {
      id: 1,
      imgPath: "https://via.placeholder.com/1200x500/004262?text=banner1",
    },
    {
      id: 2,
      imgPath: "https://via.placeholder.com/1200x500/007AB5?text=banner2",
    },
    {
      id: 3,
      imgPath: "https://via.placeholder.com/1200x500/005A85?text=banner3",
    },
    {
      id: 4,
      imgPath: "https://via.placeholder.com/1200x500/D8E6EC?text=banner4",
    },
  ];
  return (
    <Container>
      <StyledSwiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true /* 클릭하면 정지 */,
        }}
        speed={3000}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.imgPath} alt="배너" />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

const Container = styled.div``;

const StyledSwiper = styled(Swiper)`
  width: 1200px;
  height: 520px;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 0.4166666666;
  }
  .swiper-wrapper {
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: #fff;
      width: 15px;
      height: 15px;
      margin: 0 10px;
      @media screen and (max-width: 767px) {
        width: 10px;
        height: 10px;
        margin: 0 5px;
      }
    }
  }
`;

export default MainBannerSlider;
