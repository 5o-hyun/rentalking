import React from "react";
import Paging from "../components/common/Paging";
import DefaultLayout from "../components/layout/DefaultLayout";
import List from "../components/List";
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
