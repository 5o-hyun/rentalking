import React from "react";
import styled from "styled-components";
import Footer from "../base/Footer";
import Header from "../base/Header";

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div`
  width: 120rem;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 8rem);
  }
  @media screen and (max-width: 767px) {
    width: calc(100% - 4rem);
  }
`;
const Main = styled.main``;

export default DefaultLayout;
