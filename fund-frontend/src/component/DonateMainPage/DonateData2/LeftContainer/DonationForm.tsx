import React from "react";
import styled from "styled-components";
const MainContainer = styled.div`
  font-family: Lato, sans-serif;
  padding: 0;
  position: sticky;
  //   right:2rem;
  top: 1rem;
  border-radius: 16px;
  text-align: center;
  width: 300px;
  height: 25rem;
  box-shadow: 0 1.9021px 3.53246px rgba(47, 67, 90, 0.0278729),
    0 5.25905px 9.76681px rgba(47, 67, 90, 0.04),
    0 12.6618px 23.5147px rgba(47, 67, 90, 0.0521271),
    0 42px 78px rgba(47, 67, 90, 0.08);
`;
const Secondcontainer = styled.div`
  width: calc(100% - 56px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  padding-bottom: 16px;
`;
const RaisedAmount = styled.div`
  color: #53ca8b;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 150%;
  text-align: center;
`;
const TotalAount = styled.div`
  line-height: 150%;
  color: #798798;
  font-weight: 700;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 14px;
`;
const MainDiv = styled.div``;
const Line = styled.div`
  background: #f5f6f7;
  border-radius: 5px;
  width: 100%;
  height: 8px;
  margin-top: 16px;
  overflow: hidden;
`;
interface LineProps {
  $width: number;
}
const Line2 = styled.div<LineProps>`
  background: #53ca8b;
  border-radius: 5px;
  width: ${(props) => `${props.$width}%`};
  height: 8px;
  overflow: hidden;
`;
const Stats = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const Data1 = styled.div`
  line-height: 150%;
  margin-top: 4px;
  width: 50%;
  color: #798798;
  font-weight: 700;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 170%;
  text-align: right !important;
`;
const Data2 = styled.div`
  line-height: 150%;
  margin-top: 4px;
  width: 50%;
  color: #53ca8b;
  font-weight: 700;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 170%;
  text-align: left !important;
`;
const DonateButton = styled.button`
  background: #53ca8b;
  width: 100%;
  color: white;
  font-family: Lato, sans-serif;
  font-size: 20px;
  margin-top: 1.5rem;
  padding: 1rem 0rem;
  text-align: center;
  &:hover {
    background: #38a56b;
  }
`;
const Follow = styled.div`
  color: #5c74ef !important;
  border: 0;
  background: 0 0;
  width: auto;
  width:100%;
  margin-top:1.5rem;
  text-align:center;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
`;
const LastContainer = styled.div`
  width: 100%;
  color: #798798;
  position: relative;
  padding-top: 26px;
  font-weight: 400;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 10px;
  line-height: 170%;
`;
function DonationForm() {
  return (
    <MainContainer>
      <Secondcontainer>
        <RaisedAmount>$300</RaisedAmount>
        <TotalAount> raised of $800 goal</TotalAount>
        <MainDiv>
          <Line>
            <Line2 $width={60} />
          </Line>
          <Stats>
            <Data2>45% funded</Data2>
            <Data1>76 donors</Data1>
          </Stats>
        </MainDiv>
        <DonateButton>Donate Now</DonateButton>
        <Follow>Follow the campaign</Follow>
        <LastContainer>
          Help this ongoing fundraising campaign by making a donation and
          spreading the word.
        </LastContainer>
        
      </Secondcontainer>
    </MainContainer>
  );
}

export default DonationForm;
