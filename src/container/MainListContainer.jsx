import axios from "axios";
import React, { useEffect, useState } from "react";
import Paging from "../components/common/Paging";
import List from "../components/List";

const MainListContainer = () => {
  const [postPerPage] = useState(9); // 한 페이지에 보여질 아이템 수
  const [page, setPage] = useState(1); // 현재 페이지. default 값으로 1
  const handlePageChange = (page) => setPage(page);

  // 데이터 불러오기
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.usvillage.co.kr/api/v1/rentals")
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  // if (!products) {
  //   return null;
  // }

  return (
    <>
      <List postPerPage={postPerPage} page={page} />
      <Paging
        totalProduct={products.length}
        postPerPage={postPerPage}
        handlePageChange={handlePageChange}
        page={page}
      />
    </>
  );
};

export default MainListContainer;
