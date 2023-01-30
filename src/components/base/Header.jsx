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
    height: 10rem;
    z-index: 999;
    &.scroll {
      height: 6rem;
      background-color: rgba(255, 255, 255, 0.7);
    }
    .navigation {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 4rem;
      @media screen and (max-width: 767px) {
        padding: 0 2rem;
      }
      .right {
        width: 3rem;
        height: 3rem;
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
          border-radius: 1rem;
          padding: 0 0 0 1rem;
          z-index: 1;
          transition: 0.5s;
          background-color: transparent;
          &.hover {
            background-color: #ddd;
            display: block;
            width: 15rem;
          }
        }
      }
      svg {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        @media screen and (max-width: 767px) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
  h1.headerLogo {
    text-align: center;
    padding: 10rem 0 1rem;
    &.scroll {
      padding: 6rem 0 1rem;
    }
    a {
      width: 30rem;
      display: inline-block;
      @media screen and (max-width: 767px) {
        width: 25rem;
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
      width: 45rem;
      height: 6rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.6rem;
      @media screen and (max-width: 767px) {
        width: 28rem;
        font-size: 1.4rem;
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
