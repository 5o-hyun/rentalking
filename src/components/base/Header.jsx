import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const handleIsShow = (state) => {
    setIsShow(state);
    console.log(state);
  };
  return (
    <Container>
      <div className="top">
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
      <h1 className="headerLogo">
        <Link to={`/`}>
          <img src="images/logo.png" alt="rentalking" />
        </Link>
      </h1>
      <nav className="headerNav">
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
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    @media screen and (max-width: 767px) {
      height: 80px;
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
  h1.headerLogo {
    text-align: center;
    margin-bottom: 30px;
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
    ul {
      width: 450px;
      margin: 0 auto;
      padding: 8px 0;
      display: flex;
      justify-content: space-between;
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
