import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Container>
      <h1>홈페이지</h1>
      <Link to={'/list'}>
        <button>리스트바로가기</button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  button {
    width: 150px;
    height: 50px;
    background-color: #fff8ea;
    color: #ffbf3c;
    border: 1px solid #ffbf3c;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default MainPage;
