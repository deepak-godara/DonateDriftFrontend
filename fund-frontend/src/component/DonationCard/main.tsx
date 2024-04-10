import React from 'react'
import styled from 'styled-components'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { YourComponent } from '../DonateMainPage/DonateData2/LeftContainer/Story/main';
import {FetchFundRaisers} from "../../backendApi/services/FundRasierFetch";
import Main from '../FundRaisalForm/FormContainer/FormPart1/main'
const MainContainer1=styled.div`
width:100%;
margin:1rem auto;
`
const MainContainer=styled.div`
width:100%;
display:flex;
flex-direction:row;
overflow-x:hidden;
flex-wrap:wrap;
padding:0rem 0rem 1.5rem 0rem;
justify-content:space-between;
column-gap:1.5rem;
`
const PostContainer=styled.div`
width:285px;
display:flex;
box-shadow: 0 10px 30px rgba(0,0,0,.08);
flex-direction:column;
border-radius:16px;
border:none;
`
const ImageContainer=styled.img`
width:100%;
height:9.7rem;
border-radius:16px;
`
const DataContainer=styled.div`
width:100%;
box-sizing:border-box;
padding:16px 20px;
`
const NameContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const NameData=styled.div`
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
`
const CountryData=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;
padding-left: 5px;
`
const SecondData=styled.div`
max-height: 53px;
overflow: hidden;
height: 53px;
display: block;
margin-bottom: 12px;
color: #2f435a;
font-size: 18px;
font-weight: 700;`
const ThirdData=styled.div`
margin-bottom: 10px;
    height: 46px;
    line-height: 1.7;
    margin-bottom: 24px;
    overflow: hidden;
    color: #798798;
    font-size: 14px;
`
const LastData=styled.div`
border: 0;
padding-top: 8px;
padding-bottom: 20px;
border-top: 1px solid #f5f6f7;
padding: 16px 20px;
margin: 0 -20px;
display: flex;
width:100%;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;`
const AmountDiv=styled.div`
font-weight: 700;
width: 47%;
color: #2f435a;
`
const PercentageDiv=styled.div`
width: 47%;
    font-weight: 700;
    text-align: right;
    color: #6ec052;`
export interface ProptypesDonationCard{
    Data:{
        id:number,
  Category:String,
  Country:String,
  FundraiserTitle:String,
  Story:string,
  Amount:number,
  Percentage:number,
  NumberofDonors:number,
  MainCover:string
    }
    }
export interface RequiredFormat{
    id:number,
    Category:String,
    Country:String,
    FundraiserTitle:String,
    Story:string,
    Amount:number,
    Percentage:number,
    NumberofDonors:number,
    MainCover:string
}
function PostCard(props:ProptypesDonationCard) {
    const [imageData, setImageData] = useState<string | null>(null);
const Navigate=useNavigate();
    useEffect(() => {
        console.log("df")
      const loadImage = async () => {
        try {
            console.log(props.Data.MainCover)
          const response = await fetch(props.Data.MainCover);
          if (!response.ok) {
            throw new Error('Failed to fetch image');
          }
          const blob = await response.blob();
          console.log('d')
          setImageData(URL.createObjectURL(blob));
        } catch (error) {
          console.error('Error loading image:', error);
        }
      };
  loadImage()
      return () => {
        if (imageData) {
          URL.revokeObjectURL(imageData);
        }
      };
    }, []);
    const GotoFundraiser=()=>{
        Navigate(`/fundraiser/${props.Data.id}`)
    }
    const data="https://drive.google.com/uc?export=view&id=1OCR-I8D5sJmO0PUyg3x3gjVkVduXYVu7/preview";
  return (
    <PostContainer onClick={GotoFundraiser}>
        {/* {imageData!=null&& */}
    <ImageContainer src={props.Data.MainCover}></ImageContainer>
    {/* } */}
    <DataContainer>
        <NameContainer>
            <NameData>{props.Data.Category}</NameData>
            <CountryData>{props.Data.Country}</CountryData>
        </NameContainer>
        <SecondData>{props.Data.FundraiserTitle}</SecondData>
        <ThirdData><YourComponent htmlContent={props.Data.Story} /></ThirdData>
        <LastData>
            <AmountDiv>{props.Data.Amount} raised</AmountDiv>
            <PercentageDiv>{props.Data.Percentage}%funded</PercentageDiv>
        </LastData>
    </DataContainer>
</PostContainer>
  )
}

export default PostCard;