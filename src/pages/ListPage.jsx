import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Paging from "../components/common/Paging";
import DefaultLayout from "../components/layout/DefaultLayout";
import List from "../components/List";

const ListPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://api.usvillage.co.kr/api/v1/rentals").then((response) => {
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    });
  }, []);
  const [postPerPage] = useState(9); // 한 페이지에 보여질 아이템 수
  const [page, setPage] = useState(1); // 현재 페이지. default 값으로 1
  const handlePageChange = (page) => setPage(page);

  return (
    <DefaultLayout>
      <Title>제목</Title>
      <List postPerPage={postPerPage} page={page} />
      <Paging
        totalProduct={products.length}
        postPerPage={postPerPage}
        handlePageChange={handlePageChange}
        page={page}
      />
    </DefaultLayout>
  );
};

const Title = styled.h2`
  text-align: center;
  color: #212721;
  font-size: 1.8rem;
  padding: 2rem 0;
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    padding: 1rem 0;
  }
`;

export default ListPage;
