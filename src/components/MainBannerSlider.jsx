import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const MainBannerSlider = () => {
  const banners = [
    {
      id: 1,
      imgPath: "images/banner01.jpg",
      linkPath: "/about",
    },
    {
      id: 2,
      imgPath: "images/banner02.jpg",
      linkPath: "/contact",
    },
    {
      id: 3,
      imgPath: "images/banner03.jpg",
      linkPath: "#none",
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
            <Link to={banner.linkPath}>
              <img src={banner.imgPath} alt="배너" />
            </Link>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

const Container = styled.div``;

const StyledSwiper = styled(Swiper)`
  width: 120rem;
  height: 52rem;
  margin-bottom: 5rem;
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
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 1rem;
      @media screen and (max-width: 767px) {
        width: 1rem;
        height: 1rem;
        margin: 0 0.5rem;
      }
    }
  }
`;

export default MainBannerSlider;
