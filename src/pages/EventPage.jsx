import React, { useState } from "react";
import styled from "styled-components";
import Paging from "../components/common/Paging";
import DefaultLayout from "../components/layout/DefaultLayout";
import BoardContainer from "../container/BoardContainer";

const EventPage = () => {
  // pagination
  const [postPerPage] = useState(9); // 한 페이지에 보여질 아이템 수
  const [page, setPage] = useState(1); // 현재 페이지. default 값으로 1
  const handlePageChange = (page) => setPage(page);

  return (
    <DefaultLayout>
      <Subject>event</Subject>
      {/* 페이지네이션 진행고민중 */}
      <BoardContainer
        postPerPage={postPerPage}
        page={page}
        products={products}
      />
      <Paging
        totalProduct={products.data.length}
        postPerPage={postPerPage}
        handlePageChange={handlePageChange}
        page={page}
        pageRange={9}
      />
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
