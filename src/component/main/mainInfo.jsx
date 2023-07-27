import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  display: flex;
`;

const Text = styled.p`
  display: flex;
  font-weight: bold;
  color: white;
`;

const MainInfo = () => {
  return (
    <>
      <TextBox>
        <Text>
          환영합니다!<br></br> props님
        </Text>
      </TextBox>
    </>
  );
};

export default MainInfo;
