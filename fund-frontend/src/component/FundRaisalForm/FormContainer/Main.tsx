import React, { useReducer, useState } from "react";
import styled from "styled-components";
import FormPart1 from "./FormPart1";
import FormCantainer2 from "./FormPart2/main";
import { Types } from "./FormPart2/main";
import { Types1 } from "./FormPart1/main";
import "react-quill/dist/quill.snow.css";
import "./x.css";
import { UploadFundraisal } from "../../../backendApi/services/FundRaisalUpload";
// import Quill from 'quill';
const Form1 = styled.div`
  width: 100%;
`;
const Form2 = styled.div``;
const Form3 = styled.div``;
const Form4 = styled.div``;
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
  requiredAmount: "500",
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
  requiredAmount:string
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
  console.log(NewState)
  return NewState
};
function FundraisalForm(props: propsTtypes) {
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
 const MainSubmitFunc=()=>{
     UploadFundraisal(Form);
 }
  return (
    <Form1>
      {props.FormState === 0 && (
        <FormPart1  FormFunc={SubmitFunc1} LastFunc={props.back} NextFunc={props.nextPage} />
      )}
      {props.FormState === 1 && (
        <FormCantainer2  FormFunc={SubmitFunc2}LastFunc={props.back} NextFunc={props.nextPage} Subunc={MainSubmitFunc}state={State} />
      )}
    </Form1>
  );
}

export default FundraisalForm;
