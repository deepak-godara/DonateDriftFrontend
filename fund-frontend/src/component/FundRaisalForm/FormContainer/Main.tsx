import React, { useContext, useReducer, useState } from "react";
import styled from "styled-components";
import FormPart1 from "./FormPart1";
import UserContext from "../../../Store/AuthUser";
import FormCantainer2 from "./FormPart2/main";
import FormPart3  from "./FormPart3/main";
import { Types } from "./FormPart2/main";
import { Types1 } from "./FormPart1/main";
import "react-quill/dist/quill.snow.css";
import "./x.css";
import { UploadFundraisal } from "../../../backendApi/services/FundRaisalUpload";
import { useNavigate } from "react-router-dom";
// import Quill from 'quill';
const Form1 = styled.div`
  width: 100%;
`;
const ReducerTypes = {
  title: "",
  category: "",
  city: "",
  currency: "",
  country: "",
  firstName: "",
  lastName: "",
  description:"" , // Initial HTML content
  coverPhoto: undefined,
  files: [],
  videoUrl: "",
  requiredAmount: 500,
  UPIID:""
};

export interface Types2 {
  title: string;
  category: string;
  city: string;
  country: string;
  firstName: string;
  lastName: string;
  currency: string;
  description:  string;
  coverPhoto:File|undefined;
 files: Array<File>;
  videoUrl: string;
  requiredAmount:number;
  UPIID:string;
}
interface propsTtypes {
  FormState: number;
  back: (change: number) => void;
  nextPage: (change: number) => void;
}
const FormReducer = (state: Types2, action: { type: string; value: any }) => {
  const NewState = { ...state };
  console.log('svs')
  if (action.type === "part1") {
    NewState.title = action.value.title.content;
    NewState.category = action.value.category.content;
    NewState.city = action.value.city.content;
    NewState.country = action.value.country.content;
    NewState.currency = action.value.currency.content;
    NewState.lastName = action.value.lastName.content;
    NewState.firstName = action.value.firstName.content;
  } else if (action.type === "part2") {
    NewState.description=action.value.FundraiserStory.content;
    NewState.videoUrl=action.value.VideoUrl.content;
    NewState.files=action.value.FundraiserPhotos.content;
    NewState.coverPhoto=action.value.MainCoverPhoto.content
  }
  else if(action.type==="upiid")
    NewState.UPIID=action.value;
  else if(action.type==="amount")
    NewState.requiredAmount=action.value;
  console.log(NewState)
  return NewState
};
function FundraisalForm(props: propsTtypes) {
  const User=useContext(UserContext);
  const Navigate=useNavigate()
  const [Form, SetForm] = useReducer(
    FormReducer,
    ReducerTypes as Types2
  );
  const [State,SetState]=useState<number>(0);
  const [Formdata,SetFormData]=useState(new FormData());
  const SubmitFunc1=(Data:Types1)=>{
     SetForm({type:"part1",value:Data})
     SetState(1);
  }
  const SubmitFunc2=async(Data:Types)=>{
     SetForm({type:"part2",value:Data})
     
 }
 const SubmitFunc3=(Data:string)=>{
 }
 const SubmitUpi=(Data:string)=>{
  SetForm({type:"upiid",value:Data})
 }
 const SubmitAmount=(Data:number)=>{
  SetForm({type:"amount",value:Data})
 
 }
 const Submits=()=>{}
 const MainSubmitFunc=async()=>{
  if(User.UserId!==null && User.UserId!==undefined)
    {
     const Data=await UploadFundraisal(Form,User.UserId);
     if(Data.success)
      {
        if(Data.data)
          {
            Navigate(`/fundraiser/${Data.data.id}`)
          }
      }
    }
 }
  return (
    <Form1>
      {props.FormState === 0 && (
        <FormPart1  FormFunc={SubmitFunc1} LastFunc={props.back} NextFunc={props.nextPage} />
      )}
      {props.FormState === 1 && (
        <FormCantainer2  FormFunc={SubmitFunc2}LastFunc={props.back} NextFunc={props.nextPage} Subunc={MainSubmitFunc}state={State} />
      )} 
      {
        props.FormState===2&&(
<FormPart3 FormFunc={SubmitFunc3} LastFunc={props.back} SubmitFuncs={SubmitUpi} SubmitAm={SubmitAmount} Subunc={MainSubmitFunc}/>
        )
      }
    </Form1>
  );
}

export default FundraisalForm;
