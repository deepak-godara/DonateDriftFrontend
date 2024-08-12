import React, { useContext, useReducer,useState,useEffect } from 'react';
import Styled, { styled } from 'styled-components';
import DonateFormInput from './input';
import { useNavigate } from 'react-router-dom';
import Loader from "react-js-loader";
import { useParams } from 'react-router-dom';
import UserContext from '../../Store/AuthUser';
import { MakePayments } from '../../backendApi/services/MakePayment';
// import UserContext from '../../Store/AuthUser';
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
    width : 320px;
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
    width : 100%;
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
    position:relative;
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
    max-width:100%;
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
const LoaderDiv=styled.div`
position:absolute;
// margin:0rem auto;
left: calc( 37% );
top:0.4rem;
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
if(action.valid!=undefined)
    {
        if(action.type==="DonateValue" )NewState.DonateValue.valid=false;
        else if(action.type==="Comment" ) {NewState.Comment.valid=false}
    }
    else
    {
    if(action.type==="DonateValue" && typeof action.value === 'string') {NewState.DonateValue.content = action.value; NewState.DonateValue.valid=true}
    else if(action.type==="Comment"  && typeof action.value === 'string') {NewState.Comment.content = action.value; NewState.Comment.valid=true}
    }


    return NewState;
};

function DonateForm(){
    const Param=useParams();
    const Navigate=useNavigate();
    // const User=useContext()
    const User=React.useContext(UserContext);
    const [FormInfo, SetFormInfo] = useReducer(
        FormInformationReducer,
        ReducerTypes as Types1
    );
    useEffect(()=>{
        window.scrollTo({
      top: 0,
      // behavior: // Optional: Smooth scrolling animation
    });},[])
    const [Loading,SetLoading]=useState(false);
const MakePayment=async()=>{
    let count=0;
    if(FormInfo.DonateValue.content=="0"||FormInfo.DonateValue.content==="")
        {
        count++;
        SetFormInfo({type:"DonateValue", valid:false,value:""})
        }
    if(FormInfo.Comment.content==="")
        {
            count++;
            SetFormInfo({type:"Comment", valid:false,value:""})
        }
        if(count==0&&User.UserId!=null)
            {
                console.log('yes');
                const Data={
                  Currency:"USD",
                  Description:FormInfo.Comment.content,
                  Amount:FormInfo.DonateValue.content,
                  Name:User.UserName?User.UserName:"",
                  userId:User.UserId,
                }
                if(Param.id)
                    {    
                        SetLoading(true);
                    const res=await  MakePayments(Param.id,Data);
                    if(res.success)
                        {
                            if(res.data)
                                {
                                   window.location.href=res.data.url
                                }
                        }
                    }
            }

}
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

                    <SubmitContainer onClick={MakePayment}>
                    {Loading && (
                <LoaderDiv>
              <Loader
                type="spinner-cub"
                color="black"
                style={{ position:"absolute", top:"2.9rem"}}
               
                // top="2.9rem"
                bgColor="white"
                // title={"spinner-cub"}
                size={50}
              ></Loader>
              </LoaderDiv>
            )}
          {!Loading&&<div>Continue</div>}
                    </SubmitContainer>
                    <Dscrip>By continuing you are agreeing to DonaetDrift's terms and privacy policy.</Dscrip>
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
