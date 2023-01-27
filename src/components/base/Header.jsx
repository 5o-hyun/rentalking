import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  // 검색 hover
  const [isShow, setIsShow] = useState(false);
  const handleIsShow = (state) => {
    setIsShow(state);
  };

  // 윈도우 높이값
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    // console.log(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Container>
      <div className={position > 250 ? "top scroll" : "top"}>
        <div className="navigation">
          <div className="left">
            <AiOutlineMenu />
          </div>
          <div
            className="right"
            onMouseOver={() => handleIsShow(true)}
            onMouseOut={() => handleIsShow(false)}
          >
            <AiOutlineSearch
              style={isShow && { backgroundColor: "transparent" }}
            />
            <input type="text" className={isShow ? "hover" : ""} />
          </div>
        </div>
      </div>
      <h1 className={position > 250 ? "headerLogo scroll" : "headerLogo"}>
        <Link to={`/`}>
          <img src="images/logo.png" alt="rentalking" />
        </Link>
      </h1>
      <nav className={position > 250 ? "headerNav scroll" : "headerNav"}>
        <ul>
          <li>
            <Link to={`#`}>about us</Link>
          </li>
          <li>
            <Link to={`#`}>product</Link>
          </li>
          <li>
            <Link to={`#`}>event</Link>
          </li>
          <li>
            <Link to={`#`}>contact us</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
const Container = styled.header`
  .top {
    position: fixed;
    width: 100%;
    height: 100px;
    z-index: 999;
    &.scroll {
      height: 60px;
      background-color: rgba(255, 255, 255, 0.7);
    }
    .navigation {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
      @media screen and (max-width: 767px) {
        padding: 0 20px;
      }
      .right {
        width: 30px;
        height: 30px;
        position: relative;
        svg {
          position: absolute;
          z-index: 2;
        }
        input {
          position: absolute;
          right: 0;
          width: 0;
          height: 100%;
          border: 0;
          border-radius: 10px;
          padding: 0 0 0 10px;
          z-index: 1;
          transition: 0.5s;
          background-color: transparent;
          &.hover {
            background-color: #ddd;
            display: block;
            width: 150px;
          }
        }
      }
      svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
        @media screen and (max-width: 767px) {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  h1.headerLogo {
    text-align: center;
    padding: 100px 0 10px;
    &.scroll {
      padding: 60px 0 10px;
    }
    a {
      width: 300px;
      display: inline-block;
      @media screen and (max-width: 767px) {
        width: 250px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  nav.headerNav {
    &.scroll {
      position: fixed;
      z-index: 999;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    ul {
      width: 450px;
      height: 60px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 767px) {
        width: 280px;
        font-size: 14px;
      }
      li {
        a {
          text-transform: capitalize;
          font-weight: 300;
          color: #212721;
        }
      }
    }
  }
`;

export default Header;
