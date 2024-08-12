import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { YourComponent } from "../DonateMainPage/DonateData2/LeftContainer/Story/main";
const PostContainer = styled.div`
  width: 285px;
  display: flex;
  position: relative;
  z-index:400;
  cursor:pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  flex-direction: column;
  border-radius: 16px;
  border: none;
 
`;
const ImageContainer = styled.img`
  width: 100%;
  height: 9.7rem;
  border-radius: 16px;
`;
const DataContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 20px;
`;
interface donationprops{
  $lefts:string;
}
const DonationContainer=styled.div<donationprops>`
position:absolute;
width:11rem;
height:6rem;
z-index:800;
top:-3.5rem;
display:none;
background:white;
text-align:center;
padding:1rem 0.5rem;
line-height:1.5;
box-sizing:border-box;
color: #798798;
font-size:25px;
${PostContainer}:hover &{
  display:block;

}
left:${(props)=>`${props.$lefts}`};
border-radius:12px;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

`
const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NameData = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2;
  margin-bottom: 15px;
  mix-blend-mode: normal;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #4dcfb8;
`;
const CountryData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-left: 5px;
`;
const SecondData = styled.div`
  max-height: 53px;
  overflow: hidden;
  height: 53px;
  display: block;
  margin-bottom: 12px;
  color: #2f435a;
  font-size: 18px;
  font-weight: 700;
`;
const ThirdData = styled.div`
  margin-bottom: 10px;
  height: 46px;
  line-height: 1.7;
  margin-bottom: 24px;
  overflow: hidden;
  color: #798798;
  font-size: 14px;
`;
const LastData = styled.div`
  border: 0;
  padding-top: 8px;
  padding-bottom: 20px;
  border-top: 1px solid #f5f6f7;
  padding: 16px 20px;
  margin: 0 -20px;
  display: flex;
  // width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const AmountDiv = styled.div`
  font-weight: 700;
  width: 47%;
  color: #2f435a;
`;
const PercentageDiv = styled.div`
  width: 47%;
  font-weight: 700;
  text-align: right;
  color: #6ec052;
`;
export interface ProptypesDonationCard {
  Data: {
    id: number;
    Category: String;
    Country: String;
    FundraiserTitle: String;
    Story: string;
    Amount: number;
    Percentage: number;
    NumberofDonors: number;
    MainCover: string;
    Donation?:number;
    index?:number;
  },
  
}
export interface RequiredFormat {
  id: number;
  Category: String;
  Country: String;
  FundraiserTitle: String;
  Story: string;
  Amount: number;
  Percentage: number;
  NumberofDonors: number;
  MainCover: string;
}
function PostCard(props: ProptypesDonationCard) {
  const Navigate = useNavigate();
  const GotoFundraiser = () => {
    Navigate(`/fundraiser/${props.Data.id}`);
  };
  return (
    <PostContainer onClick={GotoFundraiser}>
      {props.Data.Donation&&props.Data.index!=undefined&&
      <DonationContainer $lefts={props.Data.index%3==2?"-15px":"140px"}> You have Donated ${props.Data.Donation}</DonationContainer>}
      <ImageContainer src={props.Data.MainCover}></ImageContainer>
      <DataContainer>
        <NameContainer>
          <NameData>{props.Data.Category}</NameData>
          <CountryData>{props.Data.Country}</CountryData>
        </NameContainer>
        <SecondData>{props.Data.FundraiserTitle}</SecondData>
        <ThirdData>
          <YourComponent htmlContent={props.Data.Story} />
        </ThirdData>
        <LastData>
          <AmountDiv>{props.Data.Amount} raised</AmountDiv>
          <PercentageDiv>{props.Data.Percentage.toFixed(3)}%funded</PercentageDiv>
        </LastData>
      </DataContainer>
    </PostContainer>
  );
}

export default PostCard;
