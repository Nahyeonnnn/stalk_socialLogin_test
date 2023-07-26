import React, { useState } from "react";
import styled from "styled-components";

import MainInfo from "../component/main/mainInfo";
import MainGraph from "../component/main/mainGraph";
import MainMyInvest from "../component/main/mainMyInvest";
import MainNews from "../component/main/mainNews";
import MainRank from "../component/main/mainRank";

const MiddleBar = styled.div`
  display: flex;
  width: 100vw;
  height: 8vh;
  justify-content: space-evenly;
`;

const InvestBtn = styled.button`
  width: 25vw;
  height: 8vh;
  cursor: pointer;
  background: transparent;
  color: ${({ isActive }) => (isActive ? "rgba(241, 208, 10, 0.92)" : "white")};
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid rgba(241, 208, 10, 0.92)" : "none"};
  font-size: 1rem;
  font-weight: bold;
`;

const RankBtn = styled.button`
  width: 25vw;
  height: 8vh;
  cursor: pointer;
  background: transparent;
  color: ${({ isActive }) => (isActive ? "rgba(241, 208, 10, 0.92)" : "white")};
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid rgba(241, 208, 10, 0.92)" : "none"};
  font-size: 1rem;
  font-weight: bold;
`;

const NewsBtn = styled.button`
  width: 25vw;
  height: 8vh;
  cursor: pointer;
  background: transparent;
  color: ${({ isActive }) => (isActive ? "rgba(241, 208, 10, 0.92)" : "white")};
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid rgba(241, 208, 10, 0.92)" : "none"};
  font-size: 1rem;
  font-weight: bold;
`;

const MainPage = () => {
  const [active, setActive] = useState("Invest");

  return (
    <>
      <MainInfo></MainInfo>
      <MainGraph></MainGraph>
      <MiddleBar>
        <InvestBtn
          isActive={active === "Invest"}
          onClick={() => setActive("Invest")}
        >
          투자
        </InvestBtn>
        <RankBtn isActive={active === "Rank"} onClick={() => setActive("Rank")}>
          오늘의 발견
        </RankBtn>
        <NewsBtn isActive={active === "News"} onClick={() => setActive("News")}>
          뉴스
        </NewsBtn>
      </MiddleBar>

      {active === "Invest" && <MainMyInvest></MainMyInvest>}
      {active === "Rank" && <MainRank></MainRank>}
      {active === "News" && <MainNews></MainNews>}
    </>
  );
};

export default MainPage;
