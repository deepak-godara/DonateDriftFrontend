import React, { useState } from 'react'
import styled from 'styled-components'
import { SuccessFulls } from './SuccessFullFunds'
import Category from './Category'
import { useEffect } from 'react'
import DonationCard from '../DonationCard'
import {FetchFundRaisers} from "../../backendApi/services/FundRasierFetch";
import Main from '../FundRaisalForm/FormContainer/FormPart1/main'
import { RequiredFormat } from '../DonationCard/main'
const MainContainer1=styled.div`
width:100%;
margin:1rem auto;
`
const MainContainer=styled.div`
width:100%;
display:flex;
flex-direction:row;
overflow-x:hidden;
padding:0rem 0rem 1.5rem 0rem;
justify-content:space-between;
column-gap:1.5rem;
`
const PostContainer=styled.div`
width:300px;
display:flex;
box-shadow: 0 10px 30px rgba(0,0,0,.08);
flex-direction:column;
border-radius:16px;
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

function SuccessFull() {
    const [Fundrasiers,SetFundraisers]=useState<RequiredFormat[]>([]);
    useEffect(()=>{
    async function getfundraisers(){
     const data=await FetchFundRaisers();
     if(data.success&&data.data)
     SetFundraisers(data.data);
    }
getfundraisers();
    },[])
  return (
    <MainContainer1>
    <Category/>
    <MainContainer>
        {Fundrasiers.length>0&&
        Fundrasiers.map((item,index)=><DonationCard Data={item}></DonationCard>)}
    </MainContainer>
    </MainContainer1>
  )
}

export default SuccessFull