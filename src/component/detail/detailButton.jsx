import React from 'react';
import styled from "styled-components";
// import { useNavigate } from 'react-router-dom';

const BtnContainer = styled.div`
    display : flex;
    justify-content : space-evenly;
`

const BtnBox = styled.div`
    display : flex;
    height : 3.125rem;
    width :10rem;
    background-color : ${(props) => props.color || "gray"};
    color: ${(props) => props.textColor || 'black'};
    border-radius : .625rem;
    justify-content : center;
    align-items : center;
`

const DetailButton = () => {
    const navigate = useNavigate();

    // function moveToTrade(){
    //     navigate(`/trade`); // 
    // }
    return (
        <>
            <BtnContainer>
                    <BtnBox color="#B6B6B6" textColor="#2B50F6">판매하기</BtnBox>
                    <BtnBox color="#2B50F6" textColor="#FFFFFF">구매하기</BtnBox>
            </BtnContainer>
        </>
    );
};

export default DetailButton;
