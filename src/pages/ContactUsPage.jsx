import React from "react";
import { RiMapPinRangeFill } from "react-icons/ri";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import styled from "styled-components";
import DefaultLayout from "../components/layout/DefaultLayout";
import { GiRotaryPhone } from "react-icons/gi";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiVimeo } from "react-icons/si";

const ContactUsPage = () => {
  return (
    <DefaultLayout>
      <Subject>get in touch</Subject>
      <Container>
        <Left>
          <div className="infoWrapper">
            <p>
              <RiMapPinRangeFill />
              <span>경기도 수원시 장안구 정자천로 188번길 28</span>
            </p>
            <p>
              <BsTelephoneFill />
              <span>010 4571 7424</span>
            </p>
            <p>
              <GiRotaryPhone />
              <span>031 000 0000</span>
            </p>
          </div>
          <div className="snsWrapper">
            <a href="https://github.com/5o-hyun/rentalking">
              <AiFillGithub />
            </a>
            <a href="https://velog.io/@5o_hyun">
              <SiVimeo />
            </a>
            <a href="#none">
              <BsFacebook className="disabled" />
            </a>
            <a href="#none">
              <AiFillInstagram className="disabled" />
            </a>
            <a href="#none">
              <AiOutlineTwitter className="disabled" />
            </a>
          </div>
          <div className="map"></div>
        </Left>
        <Right>
          <p className="questionTitle">Leave us a message</p>
          <input type="text" placeholder="이름 입력" />
          <input type="text" placeholder="비밀번호 입력" />
          <textarea type="text" placeholder="문의 내용 입력" rows={10} />
          <button type="submit">보내기</button>
        </Right>
      </Container>
    </DefaultLayout>
  );
};
const Subject = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  color: #e0b400;
  margin: 5rem 0;
  @media screen and (max-width: 767px) {
    margin: 2rem 0;
    font-size: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 10rem;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
    gap: 2rem;
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #212721;
      svg {
        width: 2rem;
        height: 2rem;
      }
      span {
        font-size: 1.6rem;
        @media screen and (max-width: 767px) {
          font-size: 1.4rem;
        }
      }
    }
  }
  .snsWrapper {
    display: flex;
    gap: 1.6rem;
    svg {
      width: 2.6rem;
      height: 2.6rem;
      color: #212721;
      @media screen and (max-width: 767px) {
        width: 2.4rem;
        height: 2.4rem;
      }

      &.disabled {
        color: #999;
        cursor: not-allowed;
      }
    }
  }
  .map {
    height: 22rem;
    background-color: crimson;
    @media screen and (max-width: 767px) {
      height: 16rem;
    }
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  p.questionTitle {
    font-size: 2rem;
    font-weight: bold;
    color: #666;
    margin-bottom: 1rem;
    @media screen and (max-width: 767px) {
      font-size: 1.8rem;
    }
  }
  input,
  textarea {
    background-color: #eee;
    border: 1px solid #ddd;
    height: 3rem;
    padding: 0.6rem 1rem;
    font-size: 1.4rem;
    @media screen and (max-width: 767px) {
      height: 2.4rem;
    }
  }
  textarea {
    height: 20rem;
    padding: 2rem 1rem;
    @media screen and (max-width: 767px) {
      height: 14rem;
    }
  }
  button {
    width: 100%;
    height: 5rem;
    background-color: #e0b400;
    color: #fff;
    font-weight: bold;
    font-size: 1.6rem;
    @media screen and (max-width: 767px) {
      height: 4rem;
      font-size: 1.4rem;
    }

    &:hover {
      background-color: #e09d00;
    }
  }
`;

export default ContactUsPage;
