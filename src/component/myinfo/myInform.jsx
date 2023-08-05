import React from 'react';
import styled from 'styled-components';

const TextBox = styled.div`
  display: flex;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  //align-items: center; /* 세로 방향 중앙 정렬 */
  //height: 100vh; /* 부모 요소의 높이를 설정해야 수직 정렬이 정확히 보입니다. */
  flex-direction: column;
`;

const Text = styled.p`
color: #FFF;
text-align: center;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: 110%; /* 22px */
letter-spacing: -0.0313rem;
margin-top: 5rem;
`;

const EmailText = styled.p`
color: #8F8F8F;
text-align: center;
font-family: Inter;
font-size: .625rem;
font-style: normal;
font-weight: 500;
line-height: 220%; /* 22px */
letter-spacing: -0.0156rem;
margin-top:-1rem;
`;

const MyInform = () => {
    return (
        <>
        <TextBox>
            <Text>props님 안녕하세요! </Text>
            <EmailText>props의 이메일</EmailText>
        </TextBox>
        </>
    );
};

export default MyInform;