import React from "react";
import styled from "styled-components";
import BoardItem from "../components/BoardItem";

const BoardContainer = () => {
  return (
    <Container>
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-bottom: 10rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default BoardContainer;
