import React from "react";
import MainInfo from "../component/main/mainInfo";
import MainGraph from "../component/main/mainGraph";
import MainMyInvest from "../component/main/mainMyInvest";
import MainNews from "../component/main/mainNews";
import MainRank from "../component/main/mainRank";

const MainPage = () => {
  return (
    <>
      <MainInfo></MainInfo>
      <MainGraph></MainGraph>
      <MainMyInvest></MainMyInvest>
      <MainNews></MainNews>
      <MainRank></MainRank>
    </>
  );
};

export default MainPage;
