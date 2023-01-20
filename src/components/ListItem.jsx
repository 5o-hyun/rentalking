import React from 'react';
import styled from 'styled-components';

const ListItem = ({ imgPath, brandName, name, subName, price, minPrice }) => {
  const s3URL = 'https://files.usvillage.co.kr';
  return (
    <Container>
      <div className="imgBox">
        <img src={`${s3URL}${imgPath}`} alt="" />
      </div>
      <div className="leftWrapper">
        <div className="brandName">{brandName}</div>
        <div className="name">{name}</div>
        <div className="subName">{subName}</div>
        <div className="price">{price}원</div>
        <div className="minPrice">{minPrice}원</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  cursor: pointer;
  .imgBox {
    width: 150px;
    aspect-ratio: 150 / 100;
    background-color: crimson;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .leftWrapper {
    padding: 16px;
    .brandName {
      color: #aaa;
      margin-bottom: 8px;
    }
    .name {
      color: #212721;
      font-size: 20px;
      font-weight: bold;
    }
    .subName {
      color: #212721;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    .price {
      color: #333;
      font-size: 16px;
      text-decoration: line-through;
    }
    .minPrice {
      color: crimson;
      font-size: 20px;
      font-weight: bold;
    }
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default ListItem;
