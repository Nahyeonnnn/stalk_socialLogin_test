import React from "react";
import styled from "styled-components";

const RankBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: skyblue;
`;

const MainRank = () => {
  return (
    <>
      <RankBox>오늘의 발견</RankBox>
    </>
  );
};

export default MainRank;
