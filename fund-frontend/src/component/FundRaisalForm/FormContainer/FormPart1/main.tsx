import React, { useReducer } from "react";
import styled from "styled-components";
import Select from "../../../../FunctionalCompos/Select";
import Forminput from "../../../../FunctionalCompos/input";
import Button from "../../../../FunctionalCompos/Button";
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 2.5rem;
  margin-bottom: 2rem;
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
const Content1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.8rem;
`;
const SubContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 0.5rem;
`;
const Division = styled.div`
  width: 100%;
  border: 1px solid #e2e3e5;
`;
const SubmitContainer = styled.div`
  width: 100%;
`;
const ReducerTypes = {
  FundRaiserTitle: { content: "", valid: true },
  Category: { content: "", valid: true },
  City: { content: "", valid: true },
  Currency: { content: "", valid: true },
  Country: { content: "", valid: true },
  FirstName: { content: "", valid: true },
  LastName: { content: "", valid: true },
};
export interface Types1 {
  FundRaiserTitle: { content: string; valid: boolean };
  Category: { content: string; valid: boolean };
  City: { content: string; valid: boolean };
  Country: { content: string; valid: boolean };
  FirstName: { content: string; valid: boolean };
  LastName: { content: string; valid: boolean };
  Currency: { content: string; valid: boolean };
}
const FormInformationReducer = (
  state: Types1,
  action: { type: string; value: string,valid?:boolean }
) => {
  const NewState = { ...state };
  if(action.valid!==undefined)
  {
    if(action.type==="Currency")
    NewState.Currency.valid=action.valid;
    else if(action.type==="City")
    NewState.City.valid=action.valid;
    else if(action.type==="FirstName")
    NewState.FirstName.valid=action.valid;
    else if(action.type==="LastName")
    NewState.LastName.valid=action.valid;
    else if(action.type==="FundRaiserTitle")
    NewState.FundRaiserTitle.valid=action.valid;
    else if(action.type==="Country")
    NewState.Country.valid=action.valid;
    else if(action.type==="Category")
    NewState.Category.valid=action.valid;
  }
  else{
  if (action.type === "currency") {NewState.Currency.content = action.value; NewState.Currency.valid=true}
  else if (action.type === "country") {NewState.Country.content = action.value; NewState.Country.valid=true}
  else if (action.type === "category") {NewState.Category.content = action.value; NewState.Category.valid=true}
  else if (action.type === "FundraisalTitle"){NewState.FundRaiserTitle.content = action.value; NewState.FundRaiserTitle.valid=true}
  else if (action.type === "City") {NewState.City.content = action.value; NewState.City.valid=true}
  else if (action.type === "FirstName"){NewState.FirstName.content = action.value; NewState.FirstName.valid=true}
  else if (action.type === "LastName"){NewState.LastName.content = action.value; NewState.LastName.valid=true}
  }
  return NewState;
};
interface proptypes{
  LastFunc:(change:number)=>void;
  NextFunc:(change:number)=>void;
  FormFunc:React.Dispatch<{ type: string; value: any }>;
}
function Main(props:proptypes) {
  const Currency = [
    "Rupee",
    "Dollar",
    "Euro",
    "Dinnar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
    "Dollar",
  ];
  const Category = ["Education", "Sports", "Health"];
  const Country = ["India", "Srilanka", "Pakistan"];
  const [FormInfo, SetFormInfo] = useReducer(
    FormInformationReducer,
    ReducerTypes as Types1
  );
  const SubmitFunc=()=>{
    let count=0;
    if(FormInfo.Category.content.length===0)
    {
      count++;
    SetFormInfo({type:"Category",valid:false,value:""})}
    if(FormInfo.Country.content.length===0)
    {
      count++;
    SetFormInfo({type:"Country",valid:false,value:""})}
    if(FormInfo.City.content==="")
    {
      count++;
    SetFormInfo({type:"City",valid:false,value:""})}
    if(FormInfo.Currency.content.length===0)
    {
      count++;
    SetFormInfo({type:"Currency",valid:false,value:""})}
    if(FormInfo.FundRaiserTitle.content.length===0)
    {
      count++;
    SetFormInfo({type:"FundRaiserTitle",valid:false,value:""})}
    if(FormInfo.FirstName.content.length===0)
    {
      count++;
    SetFormInfo({type:"FirstName",valid:false,value:""})}
    if(FormInfo.LastName.content.length===0)
    {
      count++;
    SetFormInfo({type:"LastName",valid:false,value:""})}
    if(count===0)
    {
      props.FormFunc({type:"part1",value:FormInfo});
      props.NextFunc(1);
    }

  }
  return (
    <MainContainer>
      <FirstData>Let's get started</FirstData>
      <Content1>
        <SecondData>Fundraiser Information</SecondData>
        <Forminput
          width="100%"
          type="string"
          label="Fundraiser Title"
          placeholder=" Add  the title to your page"
          value={FormInfo.FundRaiserTitle.content}
          name="FundraisalTitle"
          valid={FormInfo.FundRaiserTitle.valid}
          ChangeFunc={(type, value) => {
            SetFormInfo({ type, value });
          }}
        ></Forminput>
        <Select
          item={Category}
          ChangeFunc={(type: string, value: string) => {
            SetFormInfo({ type: type, value: value });
          }}
          type="category"
          value={FormInfo.Category.content}
          valid={FormInfo.Category.valid}
          label="Fundraiser category"
        ></Select>
      </Content1>
      <Content1>
        <SecondData>Fundraiser Location</SecondData>
        <Select
          item={Country}
          ChangeFunc={(type: string, value: string) => {
            SetFormInfo({ type: type, value: value });
          }}
          type="country"
          value={FormInfo.Country.content}
          valid={FormInfo.Country.valid}
          label="Country"
        ></Select>
        <Forminput
          width="100%"
          type="string"
          label="City"
          placeholder=" Add City"
          value={FormInfo.City.content}
          name="City"
          valid={FormInfo.City.valid}
          ChangeFunc={(type, value) => {
            SetFormInfo({ type, value });
          }}
        ></Forminput>
      </Content1>
      <Content1>
        <SecondData>Donation Information</SecondData>
        <Select
          item={Currency}
          ChangeFunc={(type: string, value: string) => {
            SetFormInfo({ type: type, value: value });
          }}
          type="currency"
          value={FormInfo.Currency.content}
          valid={FormInfo.Currency.valid}
          label="Fundraiser currency"
        ></Select>
      </Content1>
      <Content1>
        <SecondData>Fund & registration details</SecondData>
        <SubContent>
          <Forminput
            width="45%"
            type="string"
            label="Your first name"
            placeholder="Enter first name"
            value={FormInfo.FirstName.content}
            name="FirstName"
            valid={FormInfo.FirstName.valid}
            ChangeFunc={(type, value) => {
              SetFormInfo({ type, value });
            }}
          ></Forminput>
          <Forminput
            width="45%"
            type="string"
            label="Your last name"
            placeholder="Enter last name"
            value={FormInfo.LastName.content}
            name="LastName"
            valid={FormInfo.LastName.valid}
            ChangeFunc={(type, value) => {
              SetFormInfo({ type, value });
            }}
          ></Forminput>
        </SubContent>
      </Content1>
      <Division></Division>
      <SubmitContainer>
        <Button SubmitFunc={SubmitFunc} BackFunc={props.LastFunc}></Button>
      </SubmitContainer>
    </MainContainer>
  );
}

export default Main;
