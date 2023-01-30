import React from "react";
import QuickScroll from "../components/common/QuickScroll";
import DefaultLayout from "../components/layout/DefaultLayout";
import MainBannerSlider from "../components/MainBannerSlider";
import MainListContainer from "../container/MainListContainer";

const MainPage = () => {
  return (
    <div>
      <DefaultLayout>
        <MainBannerSlider />
        <MainListContainer />
      </DefaultLayout>
      <QuickScroll />
    </div>
  );
};

export default MainPage;
