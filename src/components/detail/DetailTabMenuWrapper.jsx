import React from "react";
import styled from "styled-components";

const DetailTabMenuWrapper = ({
  detailTabMenus,
  activeDetailTabMenu,
  onClickDetailTabMenu,
}) => {
  return (
    <Container>
      <ul className="tabMenus">
        {detailTabMenus.map((detailTabMenu) => (
          <li
            key={detailTabMenu.id}
            className={
              activeDetailTabMenu === detailTabMenu.id
                ? "tabMenu active"
                : "tabMenu"
            }
            onClick={() => onClickDetailTabMenu(detailTabMenu.id)}
          >
            {detailTabMenu.name}
          </li>
        ))}
      </ul>
      <div className="contentsWrapper">
        {detailTabMenus.map(
          (detailTabMenu) =>
            activeDetailTabMenu === detailTabMenu.id && detailTabMenu.content
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  border-top: 0.1rem solid #ddd;
  padding-top: 4rem;
  margin-top: 4rem;
  .tabMenus {
    width: 70rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    height: 5rem;
    display: flex;
    gap: 0.2rem;
    @media screen and (max-width: 767px) {
      width: 100%;
      height: 4rem;
    }
    .tabMenu {
      flex: 1;
      color: #aaa;
      background-color: #ddd;
      text-align: center;
      line-height: 5rem;
      font-size: 1.8rem;
      font-weight: bold;
      cursor: pointer;
      &.active {
        color: #fff;
        background-color: #f1c40f;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
        line-height: 4rem;
        font-size: 1.6rem;
      }
    }
  }
  .contentsWrapper {
    width: 70rem;
    margin: 0 auto;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;

export default DetailTabMenuWrapper;
