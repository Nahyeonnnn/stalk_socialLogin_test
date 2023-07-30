import React from 'react';
import styled from "styled-components";

const SpaceBox = styled.div`
  display: flex;
  width : 3rem;
  height : 4.5rem;
`;

const ChartBox = styled.div`
  display: flex;
  width: 85vw;
  height: 34vh;
  background-color: rgba(241, 208, 10, 0.92);
  border-radius: 1rem;
  margin : auto;
`;

const DetailGraph = () => {
    return (
        <>  
            <SpaceBox></SpaceBox>
            <ChartBox></ChartBox>
            <br/>
        </>
    );
};

export default DetailGraph;