import React from "react";
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
    </div>
  );
};

export default MainPage;
