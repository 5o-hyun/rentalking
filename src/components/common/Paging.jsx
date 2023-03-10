import React from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const Paging = ({
  page,
  totalProduct,
  handlePageChange,
  postPerPage,
  pageRange,
}) => {
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
        totalItemsCount={totalProduct} // 총 아이템 개수
        pageRangeDisplayed={pageRange} // paginator 내에사 보여줄 페이지의 범위
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
    gap: 2rem;
    margin: 3rem 0;
    @media screen and (max-width: 767px) {
      gap: 0.8rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  ul.pagination li:first-child {
    margin-top: 0.5rem;
    width: 1.9rem;
    height: 1.9rem;
    a,
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ul.pagination li:last-child {
    margin-top: 0.7rem;
    width: 1.9rem;
    height: 1.9rem;
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
    font-size: 1.6rem;
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
    width: 4.8rem;
    height: 3rem;
    color: #337ab7;
  }
`;

export default Paging;
