import React, { useReducer, useState, useEffect } from "react";
import styled from 'styled-components'
import Select from "../../FunctionalCompos/Select";
import PostCard from "../DonationCard/main";
import { RequiredFormat } from "../DonationCard/main";
import { API } from '../../backendApi/API'
import { urlFunctions } from '../../backendApi/function/createUrl'
import { GetFundraisersMapped } from '../../backendApi/MapperFunctions/FundRaisers'
import { BsBraces } from "react-icons/bs";
import { Form } from "react-router-dom";


interface InputWidth {
    $width: number;
    $trans: number;
}

const MovContainer = styled.div<InputWidth>`
  width: auto;
  display: flex;
  top: 0rem;
  left: ${(props) => `-${props.$width}rem`};
  margin-left: 1.55rem;
  flex-direction: row;
  flex-wrap : wrap;
  row-gap:2rem;
  padding: 0rem 0rem 1.5rem 0rem;
  justify-content: space-between;
  column-gap: 1.7rem;
  transition: ${(props) => `${props.$trans}s`};
`;

const SecondContainer = styled.div` 
    /* border : 1px solid black; */
    margin-top : 1rem;
    width : 100%;
    row-gap:2rem;
    display : flex;
    flex-direction : row;
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
    justify-content : space-around;
`

const DummyConatiner = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const MainContainer = styled.div`
    width : 100%;
    display : flex;
    flex-direction: column; 
`

const FirstContainer = styled.div`
    margin-top : 5rem;
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`

const ReducerTypes = {
    FType1: { content: "", valid: true },
    FType2: { content: "", valid: true }
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
const Buttons=styled.button`
width: 55%;
  border-radius: 8px;
  border: 1px solid #eaebee;
  box-sizing: border-box;
  font-weight: 700;
  margin:1rem auto;
  font-size: 16px;
  text-align: center;
  background: #4a90e2;
  color: #fff;
  border-color: #4a90e2;
  cursor: pointer;
  transition: 0.4s;
  padding: 1rem 0rem;
  &:hover {
    background: #1758a5;
  }

`
export interface Types1 {
    FType1: { content: string; valid: boolean };
    FType2: { content: string; valid: boolean };
}


const FormInformationReducer = (
    state: Types1,
    action: { type: string; value: string, valid?: boolean }
) => {
    const NewState = { ...state };
    if (action.valid !== undefined) {
        if (action.type === "FType1")
            NewState.FType2.valid = action.valid;
        else if (action.type === "FType1")
            NewState.FType2.valid = action.valid;
    }
    else {
        if (action.type === "FType1" && typeof action.value === "string") { NewState.FType1.content = action.value; NewState.FType1.valid = true }
        else if (action.type === "FType2" && typeof action.value === "string") { NewState.FType2.content = action.value; NewState.FType2.valid = true }
    }
    return NewState;
};

const DiscoverPage = () => {
    const SelectCountry = ["India", "Srilanka", "Pakistan"];
    const [Display, SetDisplay] = useState<boolean>(true)
    const [CurrentType,SetCurrentType]=useState<string>("")
    const [CuurentVal,SetCurrentVal]=useState<string>("")
    const [pagenumber,SetPageNumber]=useState<number>(0)
    const [Val,SetVal]=useState<number>(0)
    const SelectCity = ["Kosli", "Bhadra", "Muzzafarnagar", "Hanumangarh"]
    const SelectCategory = ["Medical", "Education", "Sports"]
    const FundingType = ["Country", "City", "Category"];
    const [Fundrasiers, SetFundraisers] = useState<RequiredFormat[]>([]);
    const [Shifts, MoveShifts] = useState<number>(0);
    const [trans, SetTrans] = useState<number>(0.5);
    let count = 0;
    const pagesize = 6;
    const [FormInfo, SetFormInfo] = useReducer(
        FormInformationReducer,
        ReducerTypes as Types1
    );
    const [CType, CtypeFn] = useState<Array<string>>(
        SelectCountry
    )
    useEffect(() => {
        async function Checks()
        {
            if(CurrentType!==FormInfo.FType1.content||CuurentVal!==FormInfo.FType2.content){
                SetPageNumber(0)
               return SetVal(1);
            }
            else{
               return SetVal(0);
            }
        }
        async function getfundraisers() {
            let Url;
           Checks().then(async()=>{
            console.log(pagenumber+" pa "+ Val+ "va "+ FormInfo.FType2.content+" "+FormInfo.FType1.content)
            switch(FormInfo.FType1.content){
                case "Category":
                    Url = urlFunctions.GetFilteredFundraisers(FormInfo.FType2.content, pagesize, pagenumber, "null", 'null')
                    break;
                case "City":
                    Url = urlFunctions.GetFilteredFundraisers("Education", pagesize, pagenumber, FormInfo.FType2.content, "null")
                    break;
                case "Country":
                    Url = urlFunctions.GetFilteredFundraisers("Education", pagesize, pagenumber, "null" ,FormInfo.FType2.content);
                    break;
                default:
                    Url = urlFunctions.GetFilteredFundraisers("Education", pagesize, pagenumber, "null", "null")
            }
            const res = await API.sendGetRequest(Url,
            );
            if(FormInfo.FType2.content) {
                count = 1;
            }
            if(count === 0){
                const params = new URLSearchParams({
                    pageSize: String(pagesize),
                    pageNumber: String(pagenumber),
                  });
                  
                  
                Url = `http://localhost:8080/api/fundraisers?${params.toString()}`;
                const res = await API.sendGetRequest(Url)
                if (res.success) {
                    const MappedData = await GetFundraisersMapped(res.data.content)
                    if(CurrentType===FormInfo.FType1.content&&CuurentVal===FormInfo.FType2.content){
                        if(MappedData.length<6)
                            SetDisplay(false)
                        else
                        SetDisplay(true)
                        const data=[...Fundrasiers,...MappedData]
                        SetFundraisers(data)
                    }
                     else
                     {
                        if(MappedData.length<6)
                            SetDisplay(false)
                        else
                        SetDisplay(true)
                    SetCurrentType(FormInfo.FType1.content)
                    SetCurrentVal(FormInfo.FType2.content)
                    SetFundraisers(MappedData)
                     }
                }
            }
            else if (res.success) {
                const MappedData = await GetFundraisersMapped(res.data.content)

                    if(CurrentType===FormInfo.FType1.content&&CuurentVal===FormInfo.FType2.content){
                        if(MappedData.length<6)
                            SetDisplay(false)
                        else
                        SetDisplay(true)
                        const data=[...Fundrasiers,...MappedData]
                        SetFundraisers(data)
                    }
                     else
                     {
                        if(MappedData.length<6)
                            SetDisplay(false)
                        else
                        SetDisplay(true)
                    SetCurrentType(FormInfo.FType1.content)
                    SetCurrentVal(FormInfo.FType2.content)
                    SetFundraisers(MappedData)
                     }
        }
           })
           
    }
        getfundraisers()
    }, [FormInfo.FType2.content,pagenumber])
    useEffect(()=>{
        if (FormInfo.FType1.content === "Country") {
            CtypeFn(SelectCountry)
        } else if (FormInfo.FType1.content === "City") {
            CtypeFn(SelectCity)
        } else {
            CtypeFn(SelectCategory)
        }
    },[])
    const ChooseType = (type: string, value: string) => {
        SetFormInfo({ type: type, value: value });
        if (value === "Country") {
            CtypeFn(SelectCountry)
        } else if (value === "City") {
            CtypeFn(SelectCity)
        } else {
            CtypeFn(SelectCategory)
        }
    }

    const handelSubmit = () => {
        SetPageNumber(prevState=>prevState+1)
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
                                ChooseType(type, value);
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

            </FirstContainer>

            <SecondContainer>

                <MovContainer $width={Shifts} $trans={trans}>
                    {Fundrasiers.length > 0 &&
                        Fundrasiers.map((item, index) => (
                            <PostCard Data={item}></PostCard>
                        ))}
                </MovContainer>

            </SecondContainer>
            {Display&&
            <Buttons onClick={handelSubmit}>Get More</Buttons>}
        </MainContainer>
    );
}

export default DiscoverPage;