import React from "react";
import styled from "styled-components";

const BoardItem = () => {
  return (
    <Container>
      <div className="picture"></div>
      <div className="boardItemContainer">
        <p className="date">2023년 02월 28일 - 2023년 03월 01일</p>
        <p className="title">렌탈킹 렌탈서비스 오픈기념 할인이벤트</p>
        <p className="desc">
          렌탈킹과 함께하는 렌탈서비스 오픈 기념! 렌탈킹에서 다양한 제품을
          렌탈해보세요!렌탈해보세요!렌탈해보세요!
        </p>
        <p className="count">조회 637</p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  aspect-ratio: 1 / 1.1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 767px) {
    aspect-ratio: 1 / 0.8;
  }
  .picture {
    width: 100%;
    height: 50%;
    background-color: red;
  }
  .boardItemContainer {
    padding: 2rem;
    .date {
      font-size: 1.4rem;
      color: #666;
      margin-bottom: 0.4rem;
      @media screen and (max-width: 767px) {
        font-size: 1.2rem;
      }
    }
    .title {
      font-size: 2rem;
      font-weight: bold;
      color: #e0b400;
      margin-bottom: 1.6rem;
      @media screen and (max-width: 767px) {
        font-size: 1.8rem;
      }
    }
    .desc {
      font-size: 1.6rem;
      color: #333;
      line-height: 1.6;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin-bottom: 4rem;
      @media screen and (max-width: 767px) {
        font-size: 1.4rem;
      }
    }
    .count {
      font-size: 1.4rem;
      color: #666;
      @media screen and (max-width: 767px) {
        font-size: 1.2rem;
      }
    }
  }
`;

export default BoardItem;
