import React from "react";
import styled from "styled-components";
import { GetDonorHistory } from "../../backendApi/services/GetDonorHistory";
import { ProptypesDonationCard } from "../DonationCard/main";

import DonationCard from '../DonationCard';
import UserContext from "../../Store/AuthUser";
const MainContainer=styled.div`
width:100%;
position:relative;
z-index:100;
`
const Fund=styled.div`
color: #4a90e2;
font-weight: 300;
font-size: 40px;
line-height: 150%;
text-align: center;
padding: 50px 0 30px;
margin-top:3rem;
`
const MainDataContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top:3rem;
  position: relative;
  flex-direction: row;
  flex-wrap:wrap;
  row-gap:1.5rem;
  padding: 0rem 0rem 1.5rem 0rem;
  justify-content: center;
  column-gap: 2rem;
  transition: 0.5;
  z-index: 100;
`;
export interface UserDonation{
    Amount:number,
    Data:ProptypesDonationCard;
  }
function UserDonation(){
    const User=React.useContext(UserContext);
    const [UserFundrasiers,SetFundraisers]=React.useState<ProptypesDonationCard[]>([])
    React.useEffect(()=>{
        async function GetDonationData(){
            console.log(User.UserId)
         const Data=await  GetDonorHistory(User.UserId)
         if(Data.data)
            SetFundraisers(Data.data)
        }
        GetDonationData();
    },[])
return(
    <MainContainer>
    <Fund>Your Donations</Fund>
    <MainDataContainer>{UserFundrasiers.map((item,index)=><DonationCard  key={index} Data={item.Data}/>)}</MainDataContainer>
   </MainContainer>
)
}
export default UserDonation;