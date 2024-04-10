import React, {useReducer, useState} from "react";
import styled from 'styled-components'
import Select from "../../FunctionalCompos/Select";
import PostCard from "../DonationCard/main";

const SecondContainer = styled.div` 
    border : 1px solid black;
    width : 100%;
`

const ButtonContainer = styled.div`
    width : 20%;
    display : flex;
    justify-content : center;
    align-items : center;
`

const TextContainer = styled.div`
    width : 25%;
    text-align : center;
    line-height : 1.5;
    font-size : 16px;
    color : #2f435a;
    margin : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const SelectContainer = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
    margin-bottom : 10px;
`

const DummyConatiner = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
`

const MainContainer = styled.div`
    width : 100%;
`

const FirstContainer = styled.div`
    margin-top : 10rem;
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`

const ReducerTypes = {
    FType1 : {content : "", valid : true},
    FType2 : {content : "", valid : true}
}

const SubmitButton = styled.div`
    align-items : center;
    width: 100%;
    text-align : center;
    color: #fff;
    background: #4a90e2;
    height: 40px;
    font-size: 18px;
    border-radius: 8px;
    box-sizing: border-box;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    transition: border-color 0.4s, background-color 0.4s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid transparent;

    &:hover {
        border-color: #2d6db9;
        background: #2d6db9;
    }


`

export interface Types1 {
    FType1: { content: string; valid: boolean };
    FType2: { content: string; valid: boolean };
}


const FormInformationReducer = (
    state: Types1,
    action: { type: string ; value: string ,valid?:boolean }
  ) => {
    const NewState = { ...state };
    if(action.valid!==undefined)
    {
      if(action.type==="FType1")
      NewState.FType2.valid=action.valid;
      else if(action.type==="FType1")
      NewState.FType2.valid=action.valid;
    }
    else{
    if (action.type === "FType1" && typeof action.value === "string") {NewState.FType1.content = action.value; NewState.FType1.valid=true}
    else if (action.type === "FType2"  && typeof action.value === "string") {NewState.FType2.content = action.value; NewState.FType2.valid=true}
    }
    return NewState;
  };

const DiscoverPage = () => {
    const SelectCountry = ["India", "Srilanka", "Pakistan"];
    const SelectCity = ["Kosli", "Bhadra", "Muzzafarnagar", "Hanumangarh"]
    const SelectCategory = ["Medical", "Education", "Sports"]
    const FundingType = ["Country", "City", "Category"];

    const [CType, CtypeFn] = useState<Array<string>>(
        SelectCountry
    )
    const ChooseType = (type: string, value: string) => {
        SetFormInfo({ type: type, value: value });
        if(value === "Country"){
            CtypeFn(SelectCountry)
        }else if(value === "City"){
            CtypeFn(SelectCity)
        }else{
            CtypeFn(SelectCategory)
        }
    }
    const [FormInfo, SetFormInfo] = useReducer(
        FormInformationReducer,
        ReducerTypes as Types1
    );

    const handelSubmit = () =>{
        if (FormInfo.FType1.content === "" || FormInfo.FType2.content === ""){
            return;
        }
        console.log("Submitting form...", FormInfo);
    };
    return (
        <MainContainer>
            <FirstContainer>
                <DummyConatiner> 
                    <SelectContainer>
                        <TextContainer><p>Search Campaigns by </p></TextContainer>

                        <Select
                            item={FundingType}
                            ChangeFunc={(type: string, value: string) => {
                            ChooseType(type,value);
                            }}
                            type="FType1"
                            value={FormInfo.FType1.content}
                            valid={FormInfo.FType1.valid}
                            label=""
                        ></Select>
                    </SelectContainer>



                    <SelectContainer>
                    <TextContainer><p>In</p></TextContainer>
                        <Select
                            item={CType}
                            ChangeFunc={(type: string, value: string) => {
                            SetFormInfo({ type: type, value: value });
                            }}
                            type="FType2"
                            value={FormInfo.FType2.content}
                            valid={FormInfo.FType2.valid}
                            label=""
                        ></Select>
                    </SelectContainer>

                </DummyConatiner>
                
                <ButtonContainer><SubmitButton onClick={handelSubmit}>Search</SubmitButton></ButtonContainer>               

            </FirstContainer>
            <SecondContainer> </SecondContainer>
        </MainContainer>
    );
}

export default DiscoverPage;