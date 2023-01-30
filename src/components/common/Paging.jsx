import React from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

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
        prevPageText={<BiArrowBack />} // 이전
        nextPageText={<BiArrowBack />} // 다음
        firstPageText={<BiArrowFromRight />}
        lastPageText={<BiArrowFromLeft />}
        onChange={handlePageChange}
        itemClassNext="lastBtn" // 다음 버튼 클래스부여
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
    @media screen and (max-width: 767px) {
      gap: 8px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  ul.pagination li:first-child {
    margin-top: 5px;
    width: 19px;
    height: 19px;
    a,
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ul.pagination li:last-child {
    margin-top: 7px;
    width: 19px;
    height: 19px;
    a,
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .lastBtn {
    transform: rotate(180deg);
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
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

export default Paging;
