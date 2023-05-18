import React from "react";
import styled from "styled-components";
import LIstItem from "./LIstItem";

const List = ({ postPerPage, page, products }) => {
  return (
    <Container>
      {products.data
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
            productId={product.id}
          />
        ))}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export default List;
