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
          <img src="images/404.png" alt="" />
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
    width: 768px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media screen and (max-width: 769px) {
      width: 320px;
    }
    .imgBox {
      width: 100px;
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
        font-size: 60px;
      }
      p.errorDesc {
        color: #212721;
        margin-bottom: 14px;
      }
      .errorBtn {
        text-transform: capitalize;
        border: 1px solid #54565a;
        color: #54565a;
        width: 150px;
        height: 40px;
        border-radius: 30px;
        font-size: 14px;
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
