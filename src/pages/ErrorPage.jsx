import React from "react";
import styled from "styled-components";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.error(error);
  return (
    <Container>
      <div className="errorWrapper">
        <div className="imgBox">
          <img src="/images/404.gif" alt="" />
        </div>
        <div className="contentsWrapper">
          <p className="errorTitle">{error.status}</p>
          <p className="errorDesc">{error.statusText || error.message}</p>
          <Link to={`/`}>
            <button className="errorBtn">go to home</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ddd;
  display: grid;
  .errorWrapper {
    width: 76.8rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media screen and (max-width: 769px) {
      width: 32rem;
    }
    .imgBox {
      width: 10rem;
      aspect-ratio: 1 / 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .contentsWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      p.errorTitle {
        color: #212721;
        font-weight: bold;
        font-size: 6rem;
      }
      p.errorDesc {
        color: #212721;
        font-size: 1.6rem;
        margin-bottom: 1.4rem;
      }
      .errorBtn {
        text-transform: capitalize;
        border: 0.1rem solid #54565a;
        color: #54565a;
        width: 15rem;
        height: 4rem;
        border-radius: 3rem;
        font-size: 1.4rem;
        background-color: transparent;
        transition: all 0.5s;
        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
`;

export default ErrorPage;
