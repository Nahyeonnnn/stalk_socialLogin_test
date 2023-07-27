import React, { useState } from "react";
import styled from "styled-components";
import BottomBar from "../component/global/bottomBar";
import TopBar from "../component/global/topBar";

const StockName = styled.div`
  display: flex;
  color: white;
  font-weight: bold;
  width: 90vw;
  height: 13vh;
  margin: auto;
  align-items: flex-end;
  font-size: larger;
`;

const PriceBox = styled.div`
  display: flex;
  color: white;
  margin-top: 1.5rem;
  justify-content: space-around;
`;

const PriceBoxLeft = styled.div`
  color: lightgray;
`;

const PriceBoxRight = styled.div`
  color: white;
`;

const PurchastText = styled.div`
  color: white;
  margin-top: 3rem;
  margin-left: 2rem;
  font-weight: bold;
`;

const FormContainer = styled.div`
  display: flex;
  width: 70vw;
  margin: auto;
  margin-top: 1.5rem;
  background-color: #f1d00a;
  border-radius: 2rem;
  opacity: 0.85;
  height: auto;
`;

const PurchaseBox = styled.input`
  display: flex;
  background-color: #f1d00a;
  opacity: 0.85;
  border-radius: 2rem;
  width: 45vw;
  height: 4vh;
  margin: auto;
  padding: 1rem 0 1rem 1rem;
  border-style: none;
  color: rgb(255, 255, 255);
  &:focus {
    outline: none;
  }
  font-size: 1.5rem;
`;

const PurchaseConfirm = styled.button`
  color: black;
  font-weight: bold;
  align-self: center;
  border: none;
  background: none;
  padding: 0.5rem;
  width: 5rem;
  white-space: nowrap;
  font-size: 1rem;
`;

const TradePage = () => {
  const [inputValue, setInputValue] = useState("");

  // This function adds the passed digit to the current input
  const addDigit = (digit) => {
    setInputValue((prevValue) => prevValue + digit);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <TopBar></TopBar>
      <StockName>삼성전자</StockName>
      <PriceBox>
        <PriceBoxLeft>구매할 가격</PriceBoxLeft>
        <PriceBoxRight>70,500원</PriceBoxRight>
      </PriceBox>
      <PurchastText>몇 주를 구매할까요?</PurchastText>
      <FormContainer>
        <PurchaseBox
          value={inputValue}
          onChange={handleInputChange}
        ></PurchaseBox>
        <PurchaseConfirm>확인</PurchaseConfirm>
      </FormContainer>
      <NumberBox>
        <ThreeNumberBox>
          <NumberEach onClick={() => addDigit(1)}>1</NumberEach>
          <NumberEach onClick={() => addDigit(2)}>2</NumberEach>
          <NumberEach onClick={() => addDigit(3)}>3</NumberEach>
        </ThreeNumberBox>
        <ThreeNumberBox>
          <NumberEach onClick={() => addDigit(4)}>4</NumberEach>
          <NumberEach onClick={() => addDigit(5)}>5</NumberEach>
          <NumberEach onClick={() => addDigit(6)}>6</NumberEach>
        </ThreeNumberBox>
        <ThreeNumberBox>
          <NumberEach onClick={() => addDigit(7)}>7</NumberEach>
          <NumberEach onClick={() => addDigit(8)}>8</NumberEach>
          <NumberEach onClick={() => addDigit(9)}>9</NumberEach>
        </ThreeNumberBox>
      </NumberBox>
      <BottomBar></BottomBar>
    </>
  );
};

export default TradePage;
