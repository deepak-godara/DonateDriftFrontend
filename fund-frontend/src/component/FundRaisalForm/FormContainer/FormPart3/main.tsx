import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import Button from "../../../../FunctionalCompos/Button";
import Forminput from "../../../../FunctionalCompos/input";
// import Main from "../FormPart1/main";
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 2.5rem;
  margin-bottom: 2rem;
`;
const Content1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.8rem;
`;
const SecondData = styled.div`
  color: #6ec052;
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 10px;
  font-weight: 600;
`;
const  UnderTaking=styled.div`
width:100%;
color: #2f435a;
  font-size: 18px;
  font-weight: 600;

`
const Box=styled.div`
width:2.5rem;
height:2.5rem;
margin-top:5px;
border-radius:12px;
background-color:white;
border:2px solid black;
`
const Division = styled.div``
const SubmitContainer = styled.div``;
interface proptypes{
    LastFunc:(change:number)=>void;
    SubmitFuncs:(Data:string)=>void;
    Subunc:()=>void,
    SubmitAm:(Data:number)=>void,
    FormFunc:(Data:string)=>void;
  }
function Account(props:proptypes){
    const [UPIID,SetUpiId]=useState<string>("");
    const [Uvalid,SetUvalid]=useState<boolean>(true);
    const [Avalid,SetAvalid]=useState<boolean>(true);
    const [Amount,SetAmount]=useState<number>(0);
    const [Under,SetUnder]=useState<boolean>(false);
    const [Valoid,SetValid]=useState<boolean>(false);
    useEffect(()=>{
        window.scrollTo({
      top: 0,
      // behavior: // Optional: Smooth scrolling animation
    });},[])
    const SubmitFunc=()=>{
        let count=0;
        if(UPIID==="")
            {
                SetUvalid(false);
                count++;
            }
        if(Amount===0)
                {
                    SetAvalid(false);
                    count++;
                }
        if(count===0 && Under){

            SetValid(true);
            props.Subunc();
        }
    }
return(
    <MainContainer>
        <Content1>
            <SecondData>Account</SecondData>
            <Forminput width="100%" type="string" label=" UPI ID" placeholder="Enter UPI id" value={UPIID} name="upiid" valid={Uvalid} ChangeFunc={(type:string,value:string)=>{SetUpiId(value) ;SetUvalid(true); props.SubmitFuncs(value)}}></Forminput>
            <Division />
            <SubmitContainer>
            </SubmitContainer>
        </Content1>
        <Content1>
            <SecondData>Amount to be Raised</SecondData>
            <Forminput width="100%" type="number" label=" Amount Required" placeholder="Enter Amount" value={Amount} name="upiid" valid={Avalid} ChangeFunc={(type:string,value:number)=>{SetAmount(value); SetAvalid(true);props.SubmitAm(value)}}></Forminput>
            <Division />
            <SubmitContainer>
            </SubmitContainer>
        </Content1>
        <Content1>
            <SecondData>UnderTaking</SecondData>
            <UnderTaking>I affirm that all data provided is accurate. I understand the importance of reliable information and commit to promptly address any discrepancies.</UnderTaking>
            <Box onClick={()=>{SetUnder(!Under)}}>
                <BiCheck style={{height:"2.1rem", width:"2.5rem" , display:Under?"block":"none"  ,color:" #6ec052"}}/>
            </Box>
        </Content1>
        <Division/>
         <Button  Loading={Valoid}BackFunc={props.LastFunc} SubmitFunc={SubmitFunc} Name="Submit"></Button>
    </MainContainer>
);
}
export default Account;