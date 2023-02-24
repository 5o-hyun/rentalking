import React from "react";
import QuickScroll from "../components/common/QuickScroll";
import DefaultLayout from "../components/layout/DefaultLayout";
import ListContainer from "../container/ListContainer";

const SubListPage = () => {
  return (
    <>
      <DefaultLayout>
        <ListContainer />
      </DefaultLayout>
      <QuickScroll />
    </>
  );
};

export default SubListPage;
