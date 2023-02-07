import React, { useState } from "react";
import styled from "styled-components";
import { CgMenuGridR } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import { useEffect } from "react";
import axios from "axios";

const Modal = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    axios
      .get("https://api.usvillage.co.kr/api/v1/rentals/categories")
      .then((response) => {
        if (response.status === 200) {
          setCategories(response.data.data);
        }
      });
  }, []);
  if (!categories) {
    return null;
  }
  return (
    <Container>
      <div className="modalContainer">
        <div className="modalTitleWrapper">
          <CgMenuGridR />
          <p className="modalTitle">전체카테고리</p>
        </div>
        <div className="categoryWrapper">
          <ul className="categoryGroup">
            <li className="category">About us</li>
            {categories.map((category) => (
              <li key={category.id} className="category">
                {category.nameEn}
              </li>
            ))}
            <li className="category">Event</li>
            <li className="category">Contact us</li>
          </ul>
        </div>
        <TfiClose className="closeBtn" />
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 94;
  .modalContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70rem;
    background-color: #fff;
    padding: 3rem;
    @media screen and (max-width: 767px) {
      width: 70%;
      padding: 1.6rem;
    }
    .modalTitleWrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 0.2rem dotted #ddd;
      svg {
        width: 3rem;
        height: 3rem;
        color: #212721;
        @media screen and (max-width: 767px) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      p.modalTitle {
        font-size: 2rem;
        color: #212721;
        grid-template-columns: repeat(4, 1fr);
        @media screen and (max-width: 767px) {
          font-size: 1.6rem;
        }
      }
    }
    .categoryWrapper {
      .categoryGroup {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 2rem;
        @media screen and (max-width: 767px) {
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: 1.6rem;
        }
        li.category {
          font-size: 1.4rem;
          color: #212721;
          transition: 0.3s;
          cursor: pointer;
          grid-template-columns: repeat(4, 1fr);
          @media screen and (max-width: 767px) {
            font-size: 1.2rem;
          }

          &:hover,
          &:active {
            color: #f1c40f;
            border-bottom: 1px solid #f1c40f;
          }
        }
      }
    }
    .closeBtn {
      position: absolute;
      top: -4rem;
      right: 0;
      color: #fff;
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      @media screen and (max-width: 767px) {
        width: 2rem;
        height: 2rem;
        top: -2.5rem;
      }
    }
  }
`;

export default Modal;
