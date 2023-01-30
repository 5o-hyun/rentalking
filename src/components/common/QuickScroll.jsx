import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const QuickScroll = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    console.log(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      {position > 600 && (
        <Container>
          <div className="scrollBtn">
            <MdOutlineKeyboardArrowUp onClick={goToTop} />
          </div>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: fixed;
  bottom: 5%;
  right: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .scrollBtn {
    width: 5rem;
    height: 5rem;
    border: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #eee;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
      background-color: #e0e0e0;
    }
    svg {
      width: 80%;
      height: 80%;
      color: #fff;
    }
  }
`;

export default QuickScroll;
