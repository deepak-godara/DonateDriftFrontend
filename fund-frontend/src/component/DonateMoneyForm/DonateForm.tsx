import React, { useReducer } from 'react';
import { act } from 'react-dom/test-utils';
import Styled from 'styled-components';
import Forminput from '../../FunctionalCompos/input';
import DonateFormInput from './input';

const MainContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormContainer = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;





const ReducerTypes = {
    DonateValue: { content: 0, valid: true },
    Comment: { content: "", valid: true },
};

export interface Types1 {
    DonateValue: { content: number; valid: boolean };
    Comment: { content: string; valid: boolean };
}

const FormInformationReducer = (
    state: Types1,
    action: { type: string | number; value : string | number, valid?:boolean}
) => {
    const NewState = { ...state };

    // if (action.valid !== undefined) {
    //     if(action.type==="DonateValue") NewState.DonateValue.valid = action.valid;
    //     else if (action.type ==="Comment") NewState.Comment.valid = action.valid;

    if(action.type==="DonateValue" && typeof action.value === 'number') {NewState.DonateValue.content = action.value; NewState.DonateValue.valid=true}
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
            <FormContainer>
                <DonateFormInput
                    width="100%"
                    type="number"
                    label="Enter Your Donation"
                    placeholder=".00"
                    value={FormInfo.DonateValue.content}
                    name="DonateValue"
                    valid={FormInfo.DonateValue.valid}
                    ChangeFunc = {(type, value) =>{
                        SetFormInfo({type, value});
                    }}
                ></DonateFormInput>


            </FormContainer>
        </MainContainer>
    );
};

export default DonateForm;
