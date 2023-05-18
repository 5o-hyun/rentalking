import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardItem = ({ eventData }) => {
  return (
    <Container>
      <BoardItemContainer>
        <div className="picture">
          <img src={eventData.imgPath} alt="" />
        </div>
        <div className="boardItemContainer">
          <p className="date">
            {eventData.startDate.split("-")[0]}년{" "}
            {eventData.startDate.split("-")[1]}월{" "}
            {eventData.startDate.split("-")[2]}일 -{" "}
            {eventData.lastDate.split("-")[0]}년{" "}
            {eventData.lastDate.split("-")[1]}월{" "}
            {eventData.lastDate.split("-")[2]}일
          </p>
          <p className="title">{eventData.title}</p>
          <p className="desc">{eventData.desc}</p>
          <p className="count">조회 {eventData.count}</p>
        </div>
      </BoardItemContainer>
      <div className="closeEventContainer">
        <p>종료된 이벤트 입니다.</p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 767px) {
    aspect-ratio: initial;
  }
  .closeEventContainer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: #fff;
      font-weight: bold;
      font-size: 2rem;
    }
  }
`;
const BoardItemContainer = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 767px) {
    height: auto;
  }
  .picture {
    width: 100%;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .boardItemContainer {
    padding: 2rem;
    @media screen and (max-width: 767px) {
      padding: 1.2rem;
    }
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
        font-size: 1.6rem;
        margin-bottom: 0.4rem;
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
      margin-bottom: 4%;
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
