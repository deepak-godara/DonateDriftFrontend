import React from "react";
import styled from "styled-components";
import { DonateData } from "./DonateData";
import DonateData2 from "./DonateData2";
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem auto;
  flex-direction: column;
`;
const FundRaiserTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 32px;
  line-height: 150%;
  color: #2f435a;
`;
const SecondData = styled.div`
  line-height: 150%;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 14px;
  color: #2f435a;
  text-align: center !important;
`;
const DataContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 150%;
  letter-spacing: 0.5px;
  font-weight: 400;
`;
const MainData = styled.div`
  margin-left: 6px;
  position: relative;
  color: #4a90e2;
`;
const DotContainer = styled.div`
  margin: 13px 12px;
  background: #798798;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  vertical-align: middle;
`;
const ThirdData = styled.div`
font-family: Lato,sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #f27979;
}`;
function main() {
  return (
    <MainContainer>
      <FundRaiserTitle>{DonateData.FundraiserTitle}</FundRaiserTitle>
      <SecondData>
        <DataContainer1>
          Fundraising campaign by <MainData>{DonateData.CreaterName}</MainData>
        </DataContainer1>
        <DataContainer1>
          <DotContainer />
          <MainData>
            {DonateData.City},{DonateData.Country}
          </MainData>
          <DotContainer />
          <ThirdData>{DonateData.Category}</ThirdData>
        </DataContainer1>
      </SecondData>
      <DonateData2
        FundRaiserPhotos={DonateData.FundRaiserPhotos}
        FundRaiserStory={DonateData.FundRaiserStory}
        Donors={DonateData.Donors}
      />
    </MainContainer>
  );
}

export default main;
