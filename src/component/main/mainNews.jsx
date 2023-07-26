import React from "react";
import styled from "styled-components";

const NewsBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: violet;
`;

const MainNews = () => {
  return (
    <>
      <NewsBox>뉴스</NewsBox>
    </>
  );
};

export default MainNews;
