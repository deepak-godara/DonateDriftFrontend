import React from "react";
import styled from "styled-components";
import { BenefitArray } from "./BenefitsArray";
const MainContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  column-gap: 2rem;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc( 100% -19rem );
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  width:16rem;
  flex-direction: column;
  row-gap:1.5rem;
`;

const ItemDiv = styled.div`
  display: flex;
  width: 200px;
  padding: 1.5rem;
  box-sizing: border-box;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
`;
const Data1 = styled.img`
  height: 5rem;
  width: 5rem;
`;
const Data4 = styled.div`
  color: black;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  width: 100%;
`;
const Data5 = styled.div`
color: #798798;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  width: 100%;
`;
const Data2 = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;
const Data3 = styled.div`
color: #798798;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  width: 100%;
`;
function Benefits() {
  return (
    <MainContainer>
        <LeftContainer>
        <Data4>DonateDrift Gives You More</Data4>
      <Data5>
        Supercharge your fundraising efforts with our unique tools, features and
        personal support. Helping you raise more money than you could elsewhere!
      </Data5>
        </LeftContainer>
    
      <RightContainer>
        {BenefitArray.map((item, index) => (
          <ItemDiv>
            <Data1 src={item.Image}></Data1>
            <Data2>{item.Name}</Data2>
            <Data3>{item.Content}</Data3>
          </ItemDiv>
        ))}
      </RightContainer>
    </MainContainer>
  );
}

export default Benefits;
