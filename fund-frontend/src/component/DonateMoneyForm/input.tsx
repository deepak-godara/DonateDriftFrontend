import { useSelect } from "downshift";
import React, { ChangeEvent, ReactElement, useState } from "react";
import styled from "styled-components";

interface InputWidth{
    $width : string;
}

interface InputColot{
    $valid : boolean;
}

const DonateContainer = styled.div<InputWidth>`
    display : flex;
    width : 100%;
    flex-direction : column;
    row-gap: 0.8 rem;
    justify-content: flex-start;
    align-items: flex-start;
`;


const DonateLabel = styled.label`
    color: #5c74ef!important;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    padding-bottom : 2rem;
    width : 100%;
`

const DummyTest = styled.div`
    display : flex;
    align-items:center;
    background-color: rgba(83, 202, 139, 0.15);
    border-radius: 8px;
    border : none;
    box-sizing: border-box;
    &:hover {
        border : 0.01px solid #53ca8b;
    }
    width : 100%;
`




const MainInput = styled.input<InputColot>`
    resize: none;
    height: 60px;
    border : none;
    box-sizing: border-box;
    width: 100%;
    text-align : right;
    font-size : 30px;
    font-weight : 700;
    transition: 0.4s;
    box-shadow: none !important;
    outline: 0;
    color :  #53ca8b!important;
    background-color: rgba(83, 202, 139, 0.0);
`;

const CommentInput = styled.textarea<InputColot>`
    outline : none;
    min-height : 90px;
    width : 100%;
    text-align : start;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    resize : none;
    transition : 0.4s;
    padding : 1rem;

    &:hover{
        border : solid #53ca8b;
    }
`;

const FixBlock = styled.div`
    // height: 60px;
    padding-right : 0.5rem;
    text-align : right;
    font-size : 30px;
    font-weight : 700;
    color :  #53ca8b!important;
    background-color: rgba(83, 202, 139, 0.0);
`

const FixBlockNew = styled.div`
    padding-left : 0.5rem;
    text-align : left;
    font-size : 30px;
    font-weight : 700;
    color :  #53ca8b!important;
    background-color: rgba(83, 202, 139, 0.0);
`
const DonateLabelTag = styled.div`
    font-size: 18px;
    line-height: 170%;
    color: #2f435a;
    font-weight: 700;
    width : 100%;
`

const CheckBox = styled.div`
    font-size : 14px;
    margin-left : 1rem;
`

const CheckBoxIn = styled.div`
    color: #798798;
    width : 100%;
    margin-top : 0.5rem;
    display : flex;
    align-items : center;
`

const DummyTestNew = styled.div`
    width : 100%;
`

interface prototypes{
    label : string;
    width : string;
    placeholder : string;
    value : string | number;
    ChangeFunc: (type: string, value: string) => void;
    type: string;
    name : string;
    valid : boolean;
}



function DonateFormInput(props : prototypes){
    const [textareaContent, setextareacontent] = useState(''); 
    
    const calculateTextareaHeight = (content: string|number) => { const numberOfLines = typeof content==="string"?content.split("\n").length:0; // Set a minimum height for the textarea 
    const minHeight = 30; 
    
    return `${Math.max(numberOfLines * 25, minHeight)}px`; }; 
    return (
        <DonateContainer $width={props.width}>
            <DonateLabel>{props.label}</DonateLabel>
            <DummyTest>
                {props.name === "DonateValue" && <FixBlockNew>₹</FixBlockNew>}
                {props.name === "DonateValue" && <MainInput $valid={props.valid} type={props.type} placeholder={props.placeholder} value={props.value} name ={props.name} onChange={(event)=>{props.ChangeFunc(event.target.name, event.target.value)}}></MainInput>}
                {props.name === "DonateValue" && <FixBlock>.00</FixBlock>}
            </DummyTest>
            <CheckBoxIn>
                {props.name === "DonateValue" && <input type="checkbox" name="FirstCheckBox" />}
                {props.name === "DonateValue" && <CheckBox>Hide your donation amount on DonateDrift</CheckBox>}
            </CheckBoxIn>         
            <DummyTestNew>
                {props.name === "Comment" && <DonateLabelTag>Add a comment with your contribution</DonateLabelTag>}
                {props.name === "Comment" && <CommentInput $valid={props.valid} placeholder={props.placeholder} value={props.value} name ={props.name} onChange={(event)=>{props.ChangeFunc(event.target.name, event.target.value)} } style={{ height: calculateTextareaHeight(props.value) }}></CommentInput>}
            </DummyTestNew>
            <CheckBoxIn>
                {props.name === "Comment" && <input type="checkbox" name="SecondCheckBox" />}
                {props.name === "Comment" && <CheckBox>Hide comment from everyone but the organiser</CheckBox>}
            </CheckBoxIn>
            <CheckBoxIn>
                {props.name === "Comment" && <input type="checkbox" name="ThirdCheckBox" />}
                {props.name === "Comment" && <CheckBox>Hide name from everyone but the organiser</CheckBox>}
            </CheckBoxIn>
            <CheckBoxIn>
                {props.name === "Comment" && <input type="checkbox" name="ForthCheckBox" />}
                {props.name === "Comment" && <CheckBox>Yes, please email me updates on this campaign's progress</CheckBox>}
            </CheckBoxIn>
        </DonateContainer>
    );
}

export default DonateFormInput;