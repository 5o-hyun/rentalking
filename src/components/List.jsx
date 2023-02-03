import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import LIstItem from "./LIstItem";

const List = ({ postPerPage, page }) => {
  const [products, setProducts] = useState();

  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      axios
        .get(
          "https://api.usvillage.co.kr/api/v1/rentals" + `${location.search}`
        )
        .then((response) => {
          if (response.status === 200) {
            setProducts(response.data.data);
          }
        })
        .catch((error) => console.log(error));
    } else if (!location.search) {
      axios
        .get("https://api.usvillage.co.kr/api/v1/rentals")
        .then((response) => {
          if (response.status === 200) {
            setProducts(response.data.data);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [location]);

  if (!products) {
    return null;
  }

  return (
    <Container>
      {products
        .slice(postPerPage * (page - 1), postPerPage * (page - 1) + postPerPage)
        .map((product) => (
          <LIstItem
            key={product.id}
            imgPath={product.imgPath}
            brandName={product.brandName}
            name={product.name}
            subName={product.subName}
            price={product.price}
            minPrice={product.minPrice}
          />
        ))}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export default List;
