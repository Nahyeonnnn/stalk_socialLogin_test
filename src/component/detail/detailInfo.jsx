import React from 'react';
import { styled } from 'styled-components';

const InfoBox = styled.div`
    display : flex;
    width : 19rem;
    height : 11rem;
    background-color : white;
    border-radius : .625rem;
    margin-left: auto;
    margin-right : auto;
    margin-top : 1.5rem;
    margin-bottom : 2rem;
`


const DetailInfo = () => {
    return (
        <>
           <InfoBox></InfoBox>
        </>
    );
};

export default DetailInfo;