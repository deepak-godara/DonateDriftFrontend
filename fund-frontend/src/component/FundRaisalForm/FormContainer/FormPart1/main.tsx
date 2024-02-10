import React, { useReducer } from "react";
import styled from "styled-components";
import Select from "../../../../FunctionalCompos/Select";
import Forminput from "../../../../FunctionalCompos/input";
import Button from "../../../../FunctionalCompos/Button";
const MainContainer = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 2.5rem;
  margin-bottom:2rem;
`;
const FirstData = styled.div`
  color: #2f435a;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 300;
`;
const SecondData = styled.div`
  color: #6ec052;
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 10px;
  font-weight: 600;
`;
const Content1=styled.div`
display: flex;
width:100%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
row-gap: 0.8rem;` 
const SubContent=styled.div`
display: flex;
width:100%;
flex-direction: row;
justify-content: space-between;
flex-wrap:wrap;
align-items: flex-start;
row-gap: 0.5rem;
`
const Division=styled.div`
width:100%;
border:1px solid #e2e3e5;
`
const SubmitContainer=styled.div`
width:100%;
`
const ReducerTypes={
    FundRaiserTitle:"",
    Category:"",
    City:"",
    Currency:"",
    Country:"",
    FirstName:"",
    LastName:"",
}
interface Types{
    FundRaiserTitle:string,
    Category:string,
    City:string,
    Country:string,
    FirstName:string,
    LastName:string,
    Currency:string,
    Email:string,
    Password:string
}
const FormInformationReducer=(state:Types,action:{type:string,value:string})=>{
  const NewState={...state};
  if(action.type==="currency")
  NewState.Currency=action.value
  else if(action.type==="country")
  NewState.Country=action.value
  else if(action.type==="category")
  NewState.Category=action.value
  else if(action.type==="FundraisalTitle")
  NewState.FundRaiserTitle=action.value
  else if(action.type==="City")
  NewState.City=action.value
  else if(action.type==="FirstName")
  NewState.FirstName=action.value
  else if(action.type==="LastName")
  NewState.LastName=action.value
    return NewState;
}
function Main() {
  const Currency=["Rupee","Dollar","Euro","Dinnar","Dollar","Dollar","Dollar","Dollar","Dollar","Dollar","Dollar","Dollar","Dollar","Dollar","Dollar"];
  const Category=["Education","Sports","Health"]
  const Country=["India","Srilanka","Pakistan"]
    const[FormInfo,SetFormInfo]=useReducer(FormInformationReducer,ReducerTypes as Types)
  return (
    <MainContainer>
      <FirstData>Let's get started</FirstData>
      <Content1>
      <SecondData>Fundraiser Information</SecondData>
      <Forminput width="100%" type="string" label="Fundraiser Title" placeholder=" Add  the title to your page" value={FormInfo.FundRaiserTitle}  name="FundraisalTitle" ChangeFunc={(type,value)=>{SetFormInfo({type,value})}} ></Forminput>
      <Select item={Category}  ChangeFunc={(type:string,value:string)=>{
        SetFormInfo({type:type,value:value})
      }} type="category" value={FormInfo.Category}label="Fundraiser category"></Select>
      </Content1>
      <Content1>
      <SecondData>Fundraiser Location</SecondData>
      <Select item={Country}  ChangeFunc={(type:string,value:string)=>{
        SetFormInfo({type:type,value:value})
      }} type="country" value={FormInfo.Country}label="Country"></Select>
      <Forminput width="100%" type="string" label="City" placeholder=" Add City" value={FormInfo.City}  name="City" ChangeFunc={(type,value)=>{SetFormInfo({type,value})}} ></Forminput>
      </Content1>
      <Content1>
      <SecondData>Donation Information</SecondData>
      <Select item={Currency}  ChangeFunc={(type:string,value:string)=>{
        SetFormInfo({type:type,value:value})
      }} type="currency" value={FormInfo.Currency}label="Fundraiser currency"></Select>
     
      </Content1>
      <Content1>
        
      <SecondData>Fund & registration details</SecondData>
      <SubContent>
      <Forminput width="45%" type="string" label="Your first name" placeholder="Enter first name" value={FormInfo.FirstName}  name="FirstName" ChangeFunc={(type,value)=>{SetFormInfo({type,value})}} ></Forminput>
      <Forminput width="45%" type="string" label="Your last name" placeholder="Enter last name" value={FormInfo.LastName}  name="LastName" ChangeFunc={(type,value)=>{SetFormInfo({type,value})}} ></Forminput>
      </SubContent>
      </Content1>
      <Division></Division>
      <SubmitContainer><Button></Button></SubmitContainer>
    </MainContainer>
  );
}

export default Main;
