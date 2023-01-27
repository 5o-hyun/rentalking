import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { SiVimeo } from "react-icons/si";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="footerContainer">
        <div className="left">
          <div className="logo">
            <img src="images/logo.png" alt="footerLogo" />
          </div>
          <div className="footerDesc">
            <p>
              Rental King is a professional company that rents products to
              users.
            </p>
            <p>This is my first project made with external api.</p>
          </div>
          <ul className="snsGroup">
            <li>
              <a
                href="https://github.com/5o-hyun"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a
                href="https://velog.io/@5o_hyun"
                target="_blank"
                rel="noreferrer"
              >
                <SiVimeo />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/5o-hyun/rentalking"
                target="_blank"
                rel="noreferrer"
              >
                <GoLinkExternal />
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">
          Copyright &copy; <span className="bold">rentalking</span> all right
          reserved.
        </p>
      </div>
    </Container>
  );
};
const Container = styled.footer`
  width: 100%;
  padding: 40px 0;
  display: grid;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    padding: 20px 0;
  }
  .footerContainer {
    place-self: center;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
      @media screen and (max-width: 767px) {
        gap: 0;
      }
      .logo {
        filter: grayscale(100%);
        width: 150px;
        @media screen and (max-width: 767px) {
          width: 100px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .footerDesc {
        max-width: 300px;
        p {
          font-size: 14px;
          color: #212721;
          text-align: center;
          @media screen and (max-width: 767px) {
            font-size: 12px;
          }
        }
      }
      ul.snsGroup {
        display: flex;
        gap: 20px;
        @media screen and (max-width: 767px) {
          margin-top: 20px;
        }
        li {
          width: 25px;
          aspect-ratio: 1 / 1;
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            width: 100%;
            height: 100%;
            svg {
              width: 100%;
              height: 100%;
              cursor: pointer;
              color: #757575;
            }
          }
        }
      }
    }
    .copyright {
      text-align: center;
      font-size: 12px;
      padding: 5px 0;
      color: #757575;
      @media screen and (max-width: 767px) {
        font-size: 10px;
      }
      .bold {
        text-transform: uppercase;
      }
    }
  }
`;

export default Footer;
