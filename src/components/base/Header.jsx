import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/data";

const Header = () => {
  // 햄버거메뉴
  const [isShowModal, setIsShowModal] = useState(false);
  const handleIsShowModal = (state) => {
    setIsShowModal(state);
  };

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

  const [isHovering, setIsHovering] = useState(0);

  // 서브메뉴
  const dispatch = useDispatch();
  const subMenus = useSelector((state) => state.categories);
  useEffect(() => {
    axios
      .get("https://api.usvillage.co.kr/api/v1/rentals/categories")
      .then((response) => {
        if (response.status === 200) {
          dispatch(setCategories(response.data.data));
        }
      });
  }, []);
  if (!subMenus.data) {
    return null;
  }
  return (
    <>
      <Container>
        <div className={position > 250 ? "top scroll" : "top"}>
          <div className="navigation">
            <div className="left">
              <AiOutlineMenu onClick={() => handleIsShowModal(true)} />
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
            <img src="/images/logo.png" alt="rentalking" />
          </Link>
        </h1>
        <nav className={position > 250 ? "headerNav scroll" : "headerNav"}>
          <ul className={isHovering ? "mainTabMenu tabHover" : "mainTabMenu"}>
            <li>
              <Link to={`/about`}>about us</Link>
            </li>
            <li
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
            >
              <Link to={`#`}>product</Link>

              <div className="subMenuContainer">
                <ul className="subTabMenu">
                  {subMenus.data.map((subMenu, index) => (
                    <li key={index}>
                      <Link to={`/list?categoryId=${subMenu.id}`}>
                        {subMenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link to={`/event`}>event</Link>
            </li>
            <li>
              <Link to={`/contact`}>contact us</Link>
            </li>
          </ul>
        </nav>
      </Container>
      {isShowModal && (
        <Modal handleIsShowModal={handleIsShowModal} subMenus={subMenus} />
      )}
    </>
  );
};
const Container = styled.header`
  .top {
    position: fixed;
    width: 100%;
    height: 10rem;
    z-index: 93;
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
          z-index: 92;
        }
        input {
          position: absolute;
          right: 0;
          width: 0;
          height: 100%;
          border: 0;
          border-radius: 1rem;
          padding: 0 0 0 1rem;
          z-index: 91;
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
        width: 20rem;
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
      z-index: 93;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    ul.mainTabMenu {
      height: 6rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      &.tabHover {
        padding-bottom: 6rem;
      }
      @media screen and (max-width: 767px) {
        font-size: 1.4rem;
      }
      li {
        position: relative;
        height: 100%;
        line-height: 6rem;
        padding: 0 3rem;

        &:hover {
          .subMenuContainer {
            display: block;
          }
        }
        @media screen and (max-width: 767px) {
          padding: 0 1rem;
        }
        a {
          text-transform: capitalize;
          font-weight: 300;
          color: #212721;
        }
      }
    }
    .subMenuContainer {
      display: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -6rem;
      width: fit-content;
      height: fit-content;
      background-color: rgba(255, 255, 255, 0.7);
      ul.subTabMenu {
        min-width: max-content;
        display: flex;
        li {
          padding: 0 1.5rem;
          font-size: 1.4rem;
          a {
            &:hover {
              font-weight: bold;
              color: #f4c300;
            }
          }
        }
      }
    }
  }
`;

export default Header;
