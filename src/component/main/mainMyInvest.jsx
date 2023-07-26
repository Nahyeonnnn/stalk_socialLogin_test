import React from "react";
import styled from "styled-components";

const InvestBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: coral;
`;

const AmountBox = styled.div`
  background-color: coral;
  display: flex;
  margin-top: 1rem;
  justify-content: space-evenly;
`;

const AmountTextLeft = styled.p`
  color: white;
`;

const AmountTextRight = styled.div`
  background-color: skyblue;
  width: 50vw;
`;

const MainMyInvest = () => {
  return (
    <>
      <AmountBox>
        <AmountTextLeft>총 투자액</AmountTextLeft>
        <AmountTextRight>(얼마)(등락률)</AmountTextRight>
      </AmountBox>
      <InvestBox>투자</InvestBox>
    </>
  );
};

export default MainMyInvest;
