import React from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";

const Paging = ({ page, totalProduct, handlePageChange, postPerPage }) => {
  // const [page, setPage] = useState(1);
  // const handlePageChange = (page) => {
  //   setPage(page);
  //   console.log(page);
  // };
  return (
    <Container>
      <Pagination
        activePage={page} // 현재페이지
        itemsCountPerPage={postPerPage} // 한페이지당 보여줄 아이템 개수
        totalItemsCount={totalProduct ? totalProduct : 0} // 총 아이템 개수
        pageRangeDisplayed={5} // paginator 내에사 보여줄 페이지의 범위
        prevPageText={"<"} // 이전
        nextPageText={">"} // 다음
        onChange={handlePageChange}
      />
    </Container>
  );
};
const Container = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    /* border: 1px solid #e2e2e2; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  ul.pagination li:first-child {
    /* border-radius: 5px 0 0 5px; */
  }

  ul.pagination li:last-child {
    /* border-radius: 0 5px 5px 0; */
  }

  ul.pagination li a {
    text-decoration: none;
    color: #212721;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #f4c300;
    border-radius: 50%;
    font-weight: bold;
  }

  /* ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #ffde59;
  } */

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

export default Paging;
