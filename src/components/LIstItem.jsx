import React from "react";
import styled from "styled-components";

const LIstItem = (props) => {
  const s3URL = "https://files.usvillage.co.kr";
  //   console.log(props);
  return (
    <Container>
      <div className="listItemImgContainer">
        <img src={`${s3URL}${props.imgPath}`} alt="제품사진" />
      </div>
      <div className="listItemContentsContainer">
        <p className="brandName">[{props.brandName}]</p>
        <p className="name">{props.name}</p>
        <p className="subName">{props.subName}</p>
        <div className="priceContainer">
          <p className="price">{props.price}원</p>
          <p className="minPrice">{props.minPrice}원</p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.7;
    }
    .listItemContentsContainer {
      bottom: 0;
    }
  }
  @media screen and (max-width: 767px) {
    overflow: visible;
    aspect-ratio: 1 / 1.8;
  }
  .listItemImgContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 767px) {
      position: static;
      height: auto;
      aspect-ratio: 1 / 1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .listItemContentsContainer {
    position: absolute;
    bottom: -50%;
    width: 100%;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 767px) {
      position: static;
    }
    p.brandName {
      font-size: 14px;
      font-weight: bold;
      color: #757575;
      margin-bottom: 5px;
      @media screen and (max-width: 767px) {
        font-size: 12px;
        margin-bottom: 3px;
      }
    }
    p.name {
      font-size: 16px;
      font-weight: bold;
      color: #212721;
      margin-bottom: 5px;
      text-align: center;
      @media screen and (max-width: 767px) {
        font-size: 14px;
        margin-bottom: 3px;
      }
    }
    p.subName {
      font-size: 14px;
      color: #212721;
      margin-bottom: 10px;
      @media screen and (max-width: 767px) {
        font-size: 12px;
        margin-bottom: 8px;
      }
    }
    .priceContainer {
      display: flex;
      align-items: center;
      p.price {
        font-size: 14px;
        color: #757575;
        text-decoration: line-through;
        text-decoration-color: #212721;
        margin-right: 4px;
        @media screen and (max-width: 767px) {
          font-size: 12px;
        }
      }
      p.minPrice {
        font-size: 16px;
        font-weight: bold;
        color: #212721;
        @media screen and (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
  }
`;

export default LIstItem;
