import React from "react";
import styled from "styled-components";

interface InputWidth{
    $width : string;
}

interface InputColot{
    $valid : boolean;
}

const DonateConatiner = styled.div<InputWidth>`
    display : flex;
    width : ${(props) => `${props.$width}`};
    flex-direction : coloumn;
    row-gap: 0.8 rem;
    justify-content: flex-start;
`;

const DonateLabel = styled.label`
color: #5c74ef!important;
font-weight: 700;
font-size: 28px;
line-height: 150%;
`

const MainInput = styled.input<InputColot>`
  resize: none;
  height: 48px;
  min-height: 48px;
  padding: 9px 16px;
  border:${(props) => (props.$valid?"1px solid #eaebee":"1px solid red")};
  // border: 1px solid #eaebee;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  color: #2f435a;
  transition: 0.4s;
  box-shadow: none !important;
  -webkit-appearance: none;
  outline: 0;
`;

interface prototypes{
    label : string;
    width : string;
    placeholder : string;
    value : string | number;
    ChangeFunc: (type: string|number, value: string|number) => void;
    type: "text" | "number";
    name : string;
    valid : boolean;
}

function DonateFormInput(props : prototypes){
    return (
        <DonateConatiner $width={props.width}>
            <DonateLabel>{props.label}</DonateLabel>
            <MainInput $valid={props.valid} type={props.type} placeholder={props.placeholder} value={props.value} name ={props.name} onChange={(event)=>{props.ChangeFunc(event.target.name, event.target.value)}}></MainInput> 
        </DonateConatiner>
    );
}

export default DonateFormInput;