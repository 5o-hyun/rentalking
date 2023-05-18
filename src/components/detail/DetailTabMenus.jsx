import React from "react";
import styled from "styled-components";

const DetailTabMenus = ({ description, imgPath }) => {
  return (
    <Container>
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {imgPath && <img src={imgPath} alt="상세이미지" />}
    </Container>
  );
};
const Container = styled.div``;

export default DetailTabMenus;
