import React from "react";
import styled from "styled-components";

const ChartBox = styled.div`
  display: flex;
  width: 20rem;
  height: 15rem;
  background-color: rgba(241, 208, 10, 0.92);
  border-radius: 1rem;
  margin: auto;
`;

const ChartType = styled.p`
  color: white;
  font-size: small;
  margin-left: 1rem;
  font-weight: bold;
`;

const ChartButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartButton = styled.button`
  background-color: lightgray;
  width: 5px;
  height: 12px;
  border-radius: 50%;
  border-style: none;
  margin: 10px 5px;
  cursor: pointer;
`;

const MainGraph = () => {
  return (
    <>
      <ChartBox>
        <ChartType>
          코스피 <br></br> 2,609.76
        </ChartType>
      </ChartBox>
      <ChartButtonBox>
        <ChartButton></ChartButton>
        <ChartButton></ChartButton>
        <ChartButton></ChartButton>
        <ChartButton></ChartButton>
        <ChartButton></ChartButton>
        <ChartButton></ChartButton>
      </ChartButtonBox>
    </>
  );
};

export default MainGraph;
