import React from "react";
import QuickScroll from "../components/common/QuickScroll";
import DefaultLayout from "../components/layout/DefaultLayout";
import MainBannerSlider from "../components/MainBannerSlider";
import ListContainer from "../container/ListContainer";

const MainPage = () => {
  return (
    <>
      <DefaultLayout>
        <MainBannerSlider />
        <ListContainer />
      </DefaultLayout>
      <QuickScroll />
    </>
  );
};

export default MainPage;
