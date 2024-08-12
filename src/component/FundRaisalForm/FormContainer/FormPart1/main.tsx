import React, { useEffect, useReducer } from "react";
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
  title: { content: "", valid: true },
  category: { content: "", valid: true },
  city: { content: "", valid: true },
  currency: { content: "", valid: true },
  country: { content: "", valid: true },
  firstName: { content: "", valid: true },
  lastName: { content: "", valid: true },
};

export interface Types1 {
  title: { content: string; valid: boolean };
  category: { content: string; valid: boolean };
  city: { content: string; valid: boolean };
  country: { content: string; valid: boolean };
  firstName: { content: string; valid: boolean };
  lastName: { content: string; valid: boolean };
  currency: { content: string; valid: boolean };
}
const FormInformationReducer = (
  state: Types1,
  action: { type: string; value: string,valid?:boolean }
) => {
  const NewState = { ...state };
  if(action.valid!==undefined)
  {
    if(action.type==="currency")
      NewState.currency.valid=action.valid;
    else if(action.type==="city")
      NewState.city.valid=action.valid;
    else if(action.type==="firstName")
      NewState.firstName.valid=action.valid;
    else if(action.type==="lastName")
      NewState.lastName.valid=action.valid;
    else if(action.type==="title")
      NewState.title.valid=action.valid;
    else if(action.type==="country")
      NewState.country.valid=action.valid;
    else if(action.type==="category")
      NewState.category.valid=action.valid;
  }
  else {
    if (action.type === "currency") {
      NewState.currency.content = action.value;
      NewState.currency.valid = true;
    } else if (action.type === "country") {
      NewState.country.content = action.value;
      NewState.country.valid = true;
    } else if (action.type === "category") {
      NewState.category.content = action.value;
      NewState.category.valid = true;
    } else if (action.type === "title") {
      NewState.title.content = action.value;
      NewState.title.valid = true;
    } else if (action.type === "city") {
      NewState.city.content = action.value;
      NewState.city.valid = true;
    } else if (action.type === "firstName") {
      NewState.firstName.content = action.value;
      NewState.firstName.valid = true;
    } else if (action.type === "lastName") {
      NewState.lastName.content = action.value;
      NewState.lastName.valid = true;
    }
  }
  return NewState;
};

interface proptypes{
  LastFunc:(change:number)=>void;
  NextFunc:(change:number)=>void;
  FormFunc:(Data:Types1)=>void;
}
function Main(props:proptypes) {
  const Currency = [
    "Dollar",
  ];
  const Category = ["Education", "Sports", "Medical","Movie","Religious","Social_Charity","Disaster","Marriage","Environemnt","StartUp"];
  const Country = ["India", "Srilanka", "Pakistan"];
  const [FormInfo, SetFormInfo] = useReducer(
    FormInformationReducer,
    ReducerTypes as Types1
  );
  useEffect(()=>{
      window.scrollTo({
    top: 0,
    // behavior: // Optional: Smooth scrolling animation
  });},[])
  const SubmitFunc = () => {
    let count = 0;
    if (FormInfo.category.content.length === 0) {
      count++;
      SetFormInfo({ type: "category", valid: false, value: "" });
    }
    if (FormInfo.country.content.length === 0) {
      count++;
      SetFormInfo({ type: "country", valid: false, value: "" });
    }
    if (FormInfo.city.content === "") {
      count++;
      SetFormInfo({ type: "city", valid: false, value: "" });
    }
    if (FormInfo.currency.content.length === 0) {
      count++;
      SetFormInfo({ type: "currency", valid: false, value: "" });
    }
    if (FormInfo.title.content.length === 0) {
      count++;
      SetFormInfo({ type: "title", valid: false, value: "" });
    }
    if(FormInfo.firstName.content.length===0)
    {
      count++;
    SetFormInfo({type:"firstName",valid:false,value:""})}
    if(FormInfo.lastName.content.length===0)
    {
      count++;
    SetFormInfo({type:"lastName",valid:false,value:""})}
    if(count===0)
    {
      props.FormFunc(FormInfo);
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
          value={FormInfo.title.content}
          name="title"
          valid={FormInfo.title.valid}
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
          value={FormInfo.category.content}
          valid={FormInfo.category.valid}
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
          value={FormInfo.country.content}
          valid={FormInfo.country.valid}
          label="Country"
        ></Select>
        <Forminput
          width="100%"
          type="string"
          label="city"
          placeholder=" Add City"
          value={FormInfo.city.content}
          name="city"
          valid={FormInfo.city.valid}
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
          value={FormInfo.currency.content}
          valid={FormInfo.currency.valid}
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
            value={FormInfo.firstName.content}
            name="firstName"
            valid={FormInfo.firstName.valid}
            ChangeFunc={(type, value) => {
              SetFormInfo({ type, value });
            }}
          ></Forminput>
          <Forminput
            width="45%"
            type="string"
            label="Your last name"
            placeholder="Enter last name"
            value={FormInfo.lastName.content}
            name="lastName"
            valid={FormInfo.lastName.valid}
            ChangeFunc={(type, value) => {
              SetFormInfo({ type, value });
            }}
          ></Forminput>
        </SubContent>
      </Content1>
      <Division></Division>
      <SubmitContainer>
        <Button  Loading={false} SubmitFunc={SubmitFunc} BackFunc={props.LastFunc} Name="Continue"></Button>
      </SubmitContainer>
    </MainContainer>
  );
}

export default Main;
