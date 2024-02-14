import React, { useReducer } from 'react';
import { act } from 'react-dom/test-utils';
import Styled, { styled } from 'styled-components';
import DonateFormInput from './input';
import { FaLock } from "react-icons/fa";


const MainContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;



const FormContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.2rem;
    width : 450px;
`;

const FormContainerSide = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    margin-top: 0.2rem;
    width : 450px;
`

const MainSection = Styled.div`
    display : flex;
    flex-direction: column;
    margin-top : 1rem;
    margin-bottom : 1.5rem;
    width : 100%;
`;


const BhikhariData = styled.div`
    display : flex;
    flex-direction: column;
    margin-top: 1rem;
    background: #f5f6f7;
    border-radius: 16px;
    padding: 28px 20px; 
    width : 70%;
`



const InitialLabel = Styled.div`
    font-weight : 700;
    font-size : 28px;
    color : #2f435a;
    margin-top : 3.7rem;
    margin-bottom : 4rem;
`

const SubmitContainer = styled.button`
    margin-top : 4rem;
    background-color : #53ca8b;
    width : 100%;
    height: 60px;
    color : white;
    font-size : 30px;
    font-family: Lato,sans-serif;
    font-style: normal;
    font-weight: 700;
`

const Dscrip = styled.div`
    width : 100%;
    max-width : 85%;
    margin : 0rem auto;
    margin-top: 15px ;
    font-weight: 400;
    font-size: 12px;
    color: #2f435a;
    text-align : center;
`

const DivideConatiner = styled.div`
    width : 65rem;
    display : flex;
    justify-content : space-around;
    margin-bottom: 16px;
    font-weight : 700;
    font-size : 20px;
`




const DataTitle = styled.div`
    color : #53ca8b;
    margin-bottom : 1rem;
`

const DataTitle2 = styled.div`
    font-size: 16px;
    color: #2f435a;
    font-weight : 700;
    margin-bottom : 2rem;
`

const DataTitle3 = styled.div`
    align-items : center;
    color: #798798;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 13px;
`



const ReducerTypes = {
    DonateValue: { content: "", valid: true },
    Comment: { content: "", valid: true },
};

export interface Types1 {
    DonateValue: { content: string; valid: boolean };
    Comment: { content: string; valid: boolean };
}

const FormInformationReducer = (
    state: Types1,
    action: { type: string ; value : string , valid?:boolean}
) => {
    const NewState = { ...state };

    if(action.type==="DonateValue" && typeof action.value === 'string') {NewState.DonateValue.content = action.value; NewState.DonateValue.valid=true}
    else if(action.type==="Comment"  && typeof action.value === 'string') {NewState.Comment.content = action.value; NewState.Comment.valid=true}


    return NewState;
};

function DonateForm(){
    const [FormInfo, SetFormInfo] = useReducer(
        FormInformationReducer,
        ReducerTypes as Types1
    );

    return (
        <MainContainer>
            <InitialLabel>Make a Donation</InitialLabel>
            <DivideConatiner>
                <FormContainer>
                    <MainSection>
                        <DonateFormInput
                            width="100%"
                            type="string"
                            label="Enter Your Donation"
                            placeholder=""
                            value={FormInfo.DonateValue.content}
                            name="DonateValue"
                            valid={FormInfo.DonateValue.valid}
                            ChangeFunc = {(type, value) =>{
                                SetFormInfo({type, value});
                            }}
                        ></DonateFormInput>
                    </MainSection>

                    <MainSection>
                        <DonateFormInput
                            width="100%"
                            type="string"
                            label="Leave a Comment"
                            placeholder=""
                            value={FormInfo.Comment.content}
                            name="Comment"
                            valid={FormInfo.Comment.valid}
                            ChangeFunc = {(type, value) =>{
                                SetFormInfo({type, value});
                            }}
                        ></DonateFormInput>
                    </MainSection>

                    <SubmitContainer>
                        Continue
                    </SubmitContainer>
                    <Dscrip>By continuing you are agreeing to GoGetFunding's terms and privacy policy.</Dscrip>
                </FormContainer>
                <FormContainerSide>
                    <BhikhariData>
                        <DataTitle>Donation FAQ</DataTitle>
                        <DataTitle2>When will Bremley get my payment?</DataTitle2>
                        <DataTitle3>Your payment is sent directly to Bremley so it immediately helps their campaign.</DataTitle3>
                        <DataTitle2><FaLock style={{color : "#53ca8b"}}/> How secure is the payment process?</DataTitle2>
                        <DataTitle3>Payments are made in a highly-secure environment. We use industry leading technology (such as SSL) to keep your information safe and encrypted</DataTitle3>
                    </BhikhariData>
                </FormContainerSide>
            </DivideConatiner>

        </MainContainer>
    );
};

export default DonateForm;
