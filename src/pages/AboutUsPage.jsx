import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import DefaultLayout from "../components/layout/DefaultLayout";
import { GiKey } from "react-icons/gi";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  // 윈도우 높이값
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    console.log(window.scrollY, document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <DefaultLayout>
      <Intro>
        <div className="introContents">
          <p className={position > 0 ? "introEn active" : "introEn"}>
            About RentalKing
          </p>
          <p className={position > 0 ? "introKo active" : "introKo"}>
            렌탈킹 소개
          </p>
        </div>
      </Intro>
      <Introduce>
        <div className="introduceImg">
          <GiKey />
        </div>
        <div className="introduceContents">
          <p className={position > 200 ? "mainTxt active" : "mainTxt"}>
            안녕하세요. 렌탈킹입니다.
            <br />
            언택트 시대, 생활하는 공간의 중요성이 더욱 부각되는 시기입니다.
            <br />
            고객님의 집이라는 공간에 새로운 의미를 부여할 수 있도록
            <br />
            고객을 이해하고 대화하기 위해 노력하고 있습니다.
            <br />
            부담없이 문의 주시면 최선을 다해서 컨설팅 해드리도록 하겠습니다.
          </p>
          <p className={position > 240 ? "detailTxt active" : "detailTxt"}>
            오랜 기간 노하우를 축적하고 역량을 쌓아온 기술자로 구성되어
            있습니다.
            <br />
            새롭게 시작하는 클라이언트의 입장에서의 완벽한 맞춤설계
            <br />
            신속하고 정확한 A/S까지 최고의 기술력과 서비스 정신으로 고객만족
            극대화를 목표로 다가갈 것을 약속 드립니다.
          </p>
          <Link to={"/contact"}>
            <button>
              <p>contact us</p>
              <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </Introduce>
      <Effort>
        <div className="box"></div>
        <div className="box">
          <div className="boxContents">
            <p className="boxTitle">enjoy your life</p>
            <p className="boxDesc">
              돈이 없어서 못써봤다는 말은 그만!
              <br />
              렌탈킹과 함께 "요즘것들"을 누려보세요.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="boxContents">
            <p className="boxTitle">apply for rental king</p>
            <p className="boxDesc">
              원하는 물품이 없다고 실망하지마세요.
              <br />
              간편하게 신청만 하면,
              <br />
              검토 후 고객님들이 많이 필요로 하는것을 즉시 채워드립니다.
            </p>
          </div>
        </div>
        <div className="box"></div>
      </Effort>
    </DefaultLayout>
  );
};
const IntroAnimationEn = keyframes`
  0%{
    top: 10rem;
    opacity: 0;
  } 100%{
    top: 15rem;
    opacity: 1;
  }
`;
const IntroAnimationEnMo = keyframes`
  0%{
    top: 5rem;
    opacity: 0;
  } 100%{
    top: 10rem;
    opacity: 1;
  }
`;
const IntroAnimationKo = keyframes`
  0%{
    top: 13rem;
    opacity: 0;
  } 100%{
    top: 18rem;
    opacity: 1;
  }
`;
const IntroAnimationKoMo = keyframes`
  0%{
    top: 7rem;
    opacity: 0;
  } 100%{
    top: 13rem;
    opacity: 1;
  }
`;
const Intro = styled.div`
  width: 100%;
  height: 40rem;
  background: url("/images/about/img1.jpg") no-repeat;
  margin: 5rem 0 15rem;
  @media screen and (max-width: 767px) {
    height: 30rem;
    margin: 0 0 5rem;
  }
  .introContents {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    p.introEn {
      color: #fff;
      font-size: 1.8rem;
      font-weight: 300;
      position: absolute;
      animation: ${IntroAnimationEn} 1s;
      animation-fill-mode: forwards;
      @media screen and (max-width: 767px) {
        animation: ${IntroAnimationEnMo} 1s;
        animation-fill-mode: forwards;
      }
    }
    p.introKo {
      color: #fff;
      font-size: 3rem;
      font-weight: bold;
      position: absolute;
      opacity: 0;
      animation: ${IntroAnimationKo} 1s 0.5s;
      animation-fill-mode: forwards;
      @media screen and (max-width: 767px) {
        animation: ${IntroAnimationKoMo} 1s 0.5s;
        animation-fill-mode: forwards;
      }
    }
  }
`;
const Introduce = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-bottom: 15rem;
  @media screen and (max-width: 767px) {
    gap: 0;
    flex-direction: column;
    margin-bottom: 5rem;
  }
  .introduceImg {
    flex: 1;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
      flex: auto;
      width: 20rem;
      height: 20rem;
    }
    svg {
      width: 50%;
      height: 50%;
      color: #e5b803;
    }
  }
  .introduceContents {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 64rem;
    height: 35rem;
    position: relative;
    @media screen and (max-width: 767px) {
      width: auto;
      flex: 1;
      height: auto;
      position: static;
    }
    p.mainTxt {
      font-size: 1.8rem;
      color: #212721;
      position: absolute;
      top: -6rem;
      transition: 1s;
      opacity: 0;
      @media screen and (max-width: 767px) {
        font-size: 1.6rem;
        position: static;
      }

      &.active {
        top: 0;
        opacity: 1;
      }
    }
  }
  p.detailTxt {
    font-size: 1.6rem;
    font-weight: 300;
    color: #666;
    max-width: 52rem;
    position: absolute;
    top: 12rem;
    opacity: 0;
    transition: 1s 0.3s;
    @media screen and (max-width: 767px) {
      font-size: 1.4rem;
      position: static;
    }

    &.active {
      top: 17rem;
      opacity: 1;
      @media screen and (max-width: 767px) {
        top: 15rem;
      }
    }
  }
  button {
    display: flex;
    gap: 1rem;
    border: 0.2rem solid #999;
    width: fit-content;
    padding: 1rem 2rem;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 767px) {
      position: static;
    }
    p {
      font-size: 1.6rem;
      text-transform: capitalize;
      color: #999;
    }
    svg {
      color: #999;
      width: 1.6rem;
      height: 1.6rem;
    }

    &:hover {
      border-color: #ecc010;
      background-color: #fff7d8;
      p,
      svg {
        color: #e5b803;
      }
    }
  }
`;
const Effort = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20rem;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  .box {
    aspect-ratio: 1 / 0.5;
    .boxContents {
      .boxTitle {
        font-size: 2.4rem;
        text-transform: capitalize;
        margin-bottom: 1.6rem;
        @media screen and (max-width: 767px) {
          font-size: 2rem;
          margin-bottom: 1.2rem;
        }
      }
      .boxDesc {
        font-size: 1.8rem;
        color: #999;
        @media screen and (max-width: 767px) {
          font-size: 1.4rem;
        }
      }
    }

    &:nth-child(1) {
      background: url("/images/about/img1.jpg") no-repeat 0 50% / cover;
      transform: scaleX(-1);
      @media screen and (max-width: 767px) {
        order: 1;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 767px) {
        order: 2;
        align-items: flex-start;
      }
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 767px) {
        order: 4;
        align-items: flex-start;
      }
    }
    &:nth-child(4) {
      background: url("/images/about/img2.jpg") no-repeat 0 50% / cover;
      @media screen and (max-width: 767px) {
        order: 3;
      }
    }
  }
`;

export default AboutUsPage;
