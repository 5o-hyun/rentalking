import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DetailInfo from "../components/detail/DetailInfo";
import DetailTabMenus from "../components/detail/DetailTabMenus";
import DetailTabMenuWrapper from "../components/detail/DetailTabMenuWrapper";

const DetailContainer = () => {
  const [periodActive, setPeriodActive] = useState(1); // 대여기간 Tab active
  const [periodSelect, setPeriodSelect] = useState(3); // 기간  => 일일대여가 x "기간" , 기본 3일
  const [totalPriceSelect, setTotalPriceSelect] = useState(1); // 총금액 => 일일대여가 x 기간
  const [discountPercent, setDiscountPercent] = useState(0); // 할인율 discountPercent, 기본 0일
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState();
  const [activeDetailTabMenu, setActiveDetailTabMenu] = useState(1); // 하단 탭메뉴 active
  const [detailImgInfo, setDetailImgInfo] = useState();

  const location = useLocation();
  const queryString = location.pathname.split("/");
  queryString.splice(0, 2);

  // 탭메뉴
  const detailTabMenus = [
    {
      id: 1,
      name: "상품설명",
      content: <DetailTabMenus description={detailImgInfo} />,
    },
    {
      id: 2,
      name: "이용안내",
      content: <DetailTabMenus imgPath="/images/detail/detail_howtouse.jpg" />,
    },
    {
      id: 3,
      name: "유의사항",
      content: <DetailTabMenus imgPath="/images/detail/detail_notice.jpg" />,
    },
  ];

  // 대여기간
  const periods = [
    { id: 1, name: 3, discount: 1, discountPercent: 0 },
    { id: 2, name: 5, discount: 0.8, discountPercent: 20 },
    { id: 3, name: 10, discount: 0.6, discountPercent: 40 },
    { id: 4, name: 15, discount: 0.5, discountPercent: 50 },
    { id: 5, name: 30, discount: 0.3, discountPercent: 70 },
  ];

  // 대여기간 active
  const periodTabActive = (id, name, discount, discountPercent) => {
    setPeriodActive(id);
    setPeriodSelect(name);
    setTotalPriceSelect(discount);
    setDiscountPercent(discountPercent);
  };

  // 탭메뉴 active
  const onClickDetailTabMenu = (detailTabMenuId) => {
    setActiveDetailTabMenu(detailTabMenuId);
  };

  const productAll = () => {
    axios.get("https://api.usvillage.co.kr/api/v1/rentals").then((response) => {
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    });
  };

  const productPick = () => {
    axios
      .get("https://api.usvillage.co.kr/api/v1/rentals/" + queryString)
      .then((response) => {
        if (response.status === 200) {
          setDetailImgInfo(response.data.data.description);
        }
      });
  };

  useEffect(() => {
    productAll();
    productPick();
  }, []);

  // 상품별 ( 쿼리스트링 === 상품id )
  useEffect(() => {
    products.map(
      (product) =>
        product.id === Number(queryString) && setSelectProduct(product)
    );
  }, [products]);

  if (!selectProduct) {
    return null;
  }

  return (
    <Container>
      <DetailInfo
        selectProduct={selectProduct}
        discountPercent={discountPercent}
        totalPriceSelect={totalPriceSelect}
        periodSelect={periodSelect}
        periods={periods}
        periodActive={periodActive}
        periodTabActive={periodTabActive}
      />
      <DetailTabMenuWrapper
        detailTabMenus={detailTabMenus}
        activeDetailTabMenu={activeDetailTabMenu}
        onClickDetailTabMenu={onClickDetailTabMenu}
      />
    </Container>
  );
};
const Container = styled.div``;

export default DetailContainer;
