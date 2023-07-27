import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  //align-items: center; /* 세로 방향 중앙 정렬 */
  //height: 100vh; /* 부모 요소의 높이를 설정해야 수직 정렬이 정확히 보입니다. */
  //flex-direction: column;
`;

const Assetbox = styled.div`
width: 277px;
height: 215px;
flex-shrink: 0;
border-radius: 20px;
background: #F1D00A;
margin-top: 3rem;
`

const Text = styled.p`
color: #000;
text-align: center;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 22px; /* 183.333% */
letter-spacing: -0.3px;
margin-top: 1.5rem;
`;

const AssetText = styled.p`
color: #000;
text-align: center;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 68.75% */
letter-spacing: -0.8px;
`;

const MyAsset = () => {
    return (
       <>
       <Container>
       <Assetbox>
        <Text>총 자산</Text>
        <AssetText>Props원</AssetText>
       </Assetbox>
       </Container>
       </>
    );
};

export default MyAsset;