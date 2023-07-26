import React, { useState } from "react";
import styled from "styled-components";

const RankOptionBox = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
  height: 5vh;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const RankOptionBtn1 = styled.button`
  display: inline;
  width: auto;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(241, 208, 10, 0.92)" : "white"};
`;

const RankOptionBtn2 = styled.button`
  display: inline;
  width: auto;
  border-radius: 1rem;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(241, 208, 10, 0.92)" : "white"};
`;

const RankOptionBtn3 = styled.button`
  display: inline;
  width: auto;
  border-radius: 1rem;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(241, 208, 10, 0.92)" : "white"};
`;

const RankOptionBtn4 = styled.button`
  display: inline;
  width: auto;
  border-radius: 1rem;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(241, 208, 10, 0.92)" : "white"};
`;

const RankOptionBtn5 = styled.button`
  display: inline;
  width: auto;
  border-radius: 1rem;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(241, 208, 10, 0.92)" : "white"};
`;

const RankBox = styled.div`
  width: 90vw;
  height: 50vh;
  margin: auto;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.9);
`;

const MainRank = () => {
  const [active, setActive] = useState("1");

  return (
    <>
      <RankOptionBox>
        <RankOptionBtn1
          isActive={active === "1"}
          onClick={() => setActive("1")}
        >
          인기
        </RankOptionBtn1>
        <RankOptionBtn2
          isActive={active === "2"}
          onClick={() => setActive("2")}
        >
          거래량
        </RankOptionBtn2>
        <RankOptionBtn3
          isActive={active === "3"}
          onClick={() => setActive("3")}
        >
          급상승
        </RankOptionBtn3>
        <RankOptionBtn4
          isActive={active === "4"}
          onClick={() => setActive("4")}
        >
          급하락
        </RankOptionBtn4>
        <RankOptionBtn5
          isActive={active === "5"}
          onClick={() => setActive("5")}
        >
          관심
        </RankOptionBtn5>
      </RankOptionBox>
      <RankBox></RankBox>
    </>
  );
};

export default MainRank;
