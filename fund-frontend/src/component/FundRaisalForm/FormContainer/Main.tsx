import React, { useReducer } from "react";
import styled from "styled-components";
import FormPart1 from "./FormPart1";
import FormCantainer2 from "./FormPart2/main";
import { Types } from "./FormPart2/main";
import { Types1 } from "./FormPart1/main";
import "react-quill/dist/quill.snow.css";
import "./x.css";
// import Quill from 'quill';
const Form1 = styled.div`
  width: 100%;
`;
const Form2 = styled.div``;
const Form3 = styled.div``;
const Form4 = styled.div``;
const ReducerTypes = {
  FundRaiserTitle: "",
  Category: "",
  City: "",
  Currency: "",
  Country: "",
  FirstName: "",
  LastName: "",
  FundraiserStory: { __html: "" }, // Initial HTML content
  MainCoverPhoto: "",
  FundraiserPhotos: [],
  VideoUrl: "",
};
interface Types2 {
  FundRaiserTitle: string;
  Category: string;
  City: string;
  Country: string;
  FirstName: string;
  LastName: string;
  Currency: string;
  FundraiserStory: { __html: string };
  MainCoverPhoto:string;
  FundraiserPhotos: Array<string>;
  VideoUrl: string;
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
    NewState.FundRaiserTitle = action.value.FundRaiserTitle.content;
    NewState.Category = action.value.Category.content;
    NewState.City = action.value.City.content;
    NewState.Country = action.value.Country.content;
    NewState.Currency = action.value.Currency.content;
    NewState.LastName = action.value.LastName.content;
    NewState.FirstName = action.value.FirstName.content;
  } else if (action.type === "part2") {
    NewState.FundraiserStory=action.value.FundraiserStory.content;
    NewState.VideoUrl=action.value.VideoUrl.content;
    NewState.FundraiserPhotos=action.value.FundraiserPhotos.content;
    NewState.MainCoverPhoto=action.value.MainCoverPhoto.content
  }
  console.log(NewState)
  return NewState
};
function FundraisalForm(props: propsTtypes) {
  const [Form, SetForm] = useReducer(
    FormReducer,
    ReducerTypes as Types2
  );
  return (
    <Form1>
      {props.FormState === 0 && (
        <FormPart1  FormFunc={SetForm} LastFunc={props.back} NextFunc={props.nextPage} />
      )}
      {props.FormState === 1 && (
        <FormCantainer2  FormFunc={SetForm}LastFunc={props.back} NextFunc={props.nextPage} />
      )}
    </Form1>
  );
}

export default FundraisalForm;
