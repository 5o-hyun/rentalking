import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LIstItem = (props) => {
  const s3URL = "https://files.usvillage.co.kr";
  return (
    <Link to={`/list/${props.productId}`}>
      <Container>
        <div className="listItemImgContainer">
          <img src={`${s3URL}${props.imgPath}`} alt="제품사진" />
        </div>
        <div className="listItemContentsContainer">
          <p className="brandName">&#91;{props.brandName}&#93;</p>
          <p className="name">{props.name}</p>
          <p className="subName">{props.subName}</p>
          <div className="priceContainer">
            <p className="price">{props.price}원</p>
            <p className="minPrice">{props.minPrice}원</p>
          </div>
        </div>
      </Container>
    </Link>
  );
};
const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 0.2rem 0.8rem 0px;
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
    aspect-ratio: 1 / 1.3;
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
      padding: 0 1rem;
      box-sizing: border-box;
    }
    p.brandName {
      font-size: 1.4rem;
      font-weight: bold;
      color: #757575;
      margin-bottom: 0.5rem;
      @media screen and (max-width: 767px) {
        font-size: 1.2rem;
        margin-bottom: 0.3rem;
      }
    }
    p.name {
      font-size: 1.6rem;
      font-weight: bold;
      color: #212721;
      margin-bottom: 0.5rem;
      text-align: center;
      @media screen and (max-width: 767px) {
        font-size: 1.4rem;
        margin-bottom: 0.3rem;
      }
    }
    p.subName {
      font-size: 1.4rem;
      color: #212721;
      margin-bottom: 1rem;
      @media screen and (max-width: 767px) {
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
      }
    }
    .priceContainer {
      display: flex;
      align-items: center;
      p.price {
        font-size: 1.4rem;
        color: #757575;
        text-decoration: line-through;
        text-decoration-color: #212721;
        margin-right: 0.4rem;
        @media screen and (max-width: 767px) {
          font-size: 1.2rem;
        }
      }
      p.minPrice {
        font-size: 1.6rem;
        font-weight: bold;
        color: #212721;
        @media screen and (max-width: 767px) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default LIstItem;
