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
  padding: 4rem 0;
  display: grid;
  margin-top: 2rem;
  border-top: 0.1rem solid #ddd;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    padding: 2rem 0;
  }
  .footerContainer {
    place-self: center;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
      @media screen and (max-width: 767px) {
        gap: 0;
      }
      .logo {
        filter: grayscale(100%);
        width: 15rem;
        @media screen and (max-width: 767px) {
          width: 10rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .footerDesc {
        max-width: 30rem;
        p {
          font-size: 1.4rem;
          color: #212721;
          text-align: center;
          @media screen and (max-width: 767px) {
            font-size: 1.2rem;
            line-height: 1.6;
          }
        }
      }
      ul.snsGroup {
        display: flex;
        gap: 2rem;
        @media screen and (max-width: 767px) {
          margin-top: 2rem;
        }
        li {
          width: 2.5rem;
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
              &:hover,
              &:active {
                color: #212721;
              }
            }
          }
        }
      }
    }
    .copyright {
      text-align: center;
      font-size: 1.2rem;
      padding: 0.5rem 0;
      color: #757575;
      @media screen and (max-width: 767px) {
        font-size: 1rem;
      }
      .bold {
        text-transform: uppercase;
      }
    }
  }
`;

export default Footer;
