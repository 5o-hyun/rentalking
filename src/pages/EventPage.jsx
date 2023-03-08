import React, { useState } from "react";
import styled from "styled-components";
import DefaultLayout from "../components/layout/DefaultLayout";
import BoardContainer from "../container/BoardContainer";

const EventPage = () => {
  return (
    <DefaultLayout>
      <Subject>event</Subject>
      <BoardContainer />
    </DefaultLayout>
  );
};
const Subject = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  color: #e0b400;
  margin: 5rem 0;
  @media screen and (max-width: 767px) {
    margin: 2rem 0;
    font-size: 2rem;
  }
`;

export default EventPage;
