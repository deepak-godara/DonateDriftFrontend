import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DonationCard from "../DonationCard";
import { PendingFundRaisers } from "../../backendApi/services/PendingFundraiser";
import { RequiredFormat } from "../DonationCard/main";
const MainContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;
`;
const Fund = styled.div`
  color: #4a90e2;
  font-weight: 300;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  padding: 50px 0 30px;
  margin-top: 3rem;
`;
const MainDataContainer = styled.div`
  width: 100%;
  // height: 30rem;
  display: flex;
  margin-top: 3rem;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  padding: 0rem 0rem 1.5rem 0rem;
  justify-content: center;
  column-gap: 2rem;
  transition: 0.5;
  z-index: 100;
`;
function AdminMainPage() {
  const [Fundraisers, SetFundraiser] = useState<RequiredFormat[]>([]);
  async function GetData() {
    const data = await PendingFundRaisers();
    console.log(data)
    if (data.success && data.data) SetFundraiser(data.data);
  }
  useEffect(() => {
    GetData();
  },[]);
  return (
    <MainContainer>
      <Fund>Newly Started Fundraisers</Fund>
      <MainDataContainer>{Fundraisers.map((item,index)=><DonationCard  key={index} Data={item}/>)}</MainDataContainer>
    </MainContainer>
  );
}

export default AdminMainPage;
