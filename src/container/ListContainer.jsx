import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import Paging from "../components/common/Paging";
import List from "../components/List";
import { setProducts as setProductsWithRedux } from "../redux/data";
import { setCategories as setCategoriesWithRedux } from "../redux/data";

const SubListPage = () => {
  // Url
  const [urlQueryString, setUrlQueryString] = useState();
  const location = useLocation();

  // products
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    setPage(1);
    axios
      .get("https://api.usvillage.co.kr/api/v1/rentals" + `${location.search}`)
      .then((response) => {
        if (response.status === 200) {
          // setProducts(response.data.data);
          dispatch(setProductsWithRedux(response.data.data));
          urlChange();
        }
      });
  }, [location]);

  const urlChange = () => {
    const queryString = location.search.split("=");
    queryString.splice(0, 1);
    setUrlQueryString(Number(queryString));
  };

  // pagination
  const [postPerPage] = useState(9); // 한 페이지에 보여질 아이템 수
  const [page, setPage] = useState(1); // 현재 페이지. default 값으로 1
  const handlePageChange = (page) => setPage(page);

  // category name
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    axios
      .get("https://api.usvillage.co.kr/api/v1/rentals/categories")
      .then((response) => {
        if (response.status === 200) {
          dispatch(setCategoriesWithRedux(response.data.data));
        }
      });
  }, []);

  if (!products.data) return null;
  if (!categories.data) return null;

  return (
    <>
      {categories.data.map(
        (category) =>
          category.id === urlQueryString && (
            <Title key={category.id}>{category.name}</Title>
          )
      )}
      <List postPerPage={postPerPage} page={page} products={products} />
      <Paging
        totalProduct={products.data.length}
        postPerPage={postPerPage}
        handlePageChange={handlePageChange}
        page={page}
        pageRange={Math.ceil(products.data.length / 9)}
      />
    </>
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

export default SubListPage;
