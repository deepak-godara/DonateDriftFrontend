import React, { FormEvent, useReducer, useState ,useEffect} from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import Loader from "react-js-loader";
import { SignInwithPassword } from "../../../backendApi/services/SignInApi";
// import { Sign } from "crypto";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  // background: rgba(0, 0, 0, 0.75);
  padding-top:3.5rem;
  box-sizing:border-box;
`;
const MainContainer = styled.form`
padding: 2rem 2rem;
width: 30rem;
box-sizing: border-box;
position: relative;
// height: 42rem;
border-radius: 12px;
display: flex;
flex-direction: column;
// justify-content: flex-start;
row-gap: 1.5rem;
margin: 3rem auto;
background: white;
`;
const BackButton = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 2.5rem;
  left: 26.5rem;
`;
const NameContiner = styled.div`
font-weight: 700;
font-family: Poppins, sans-serif;
color: rgb(112, 112, 112);
// margin-bottom:0.5rem;
font-size: 1.8rem !important;
}
`;
const DataContainer = styled.div`
  width: 100%;
`;
const LabelContainer = styled.label`
  color: rgb(112, 112, 112);
  font-size: 1.2rem;
  display: block;
  font-family: Poppins, sans-serif;
`;
const InputContainer = styled.input`
    display: block;
    position: relative;
    width: 100%;
    max-width: 100%;
    min-width: 0px;
    margin-top: 0.7rem;
    height: 3.5rem;
    border:none;
    outline: none;
    padding: 0rem 0.6rem;
    font-size: 1.1rem;
    border-radius: 0.75rem;
    box-sizing:border-box;
    background: rgb(230, 235, 240);
    font-family: Poppins, sans-serif;
    color: rgb(112, 112, 112);
}
    
    `;
const ForgetContainer = styled.div`
  font-size: 0.8rem;
  text-decoration: underline;
  font-weight: 400;
  color: rgb(160, 160, 160);
  font-family: Poppins, sans-serif;
`;
const SubmitButton = styled.button`
  border: none;
  height: 3.6rem;
  background: black;
  border-radius: 16px;
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
  color: white;
  cursor: pointer;
`;
const ChangeContianer=styled.div`
margin-top:1rem;
border-top:1px solid grey;
padding-top:1rem;
display:flex;
flex-direction:row;
justify-content:center;
text-align:center;
color:#2f435a;
cursor:pointer;
font-weight:700;
font-size:18px;
`
const LoaderDiv=styled.div`
position:absolute;
// margin:0rem auto;
left: calc( 37% );
top:0.4rem;
`
const HoverDiv=styled.div`
display:none;
`

const DonationDiv=styled.div`
position:absolute;

`
const MainDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightblue;
`;

const OtherDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgreen;
  display: none; /* Initially hide the div */
  position: absolute;
  top: 0;
  left: 100%;
  ${Container}:hover & {
    display: block;
  }
`;


const ReducerTypes = {
  Email: "",
  Password: "",
};
interface Types {
  Email: string;
  Password: string;
}

const SignInReducer = (
  state: Types,
  action: { type: string; data: string }
) => {
  const NewState = { ...state };
  if (action.type === "Email") NewState.Email = action.data;
  if (action.type === "Password") NewState.Password = action.data;
  return NewState;
};
interface propstypes{
  OnClose:()=>void;
  ChangeDiv:()=>void;
}
function SignIn(props:propstypes) {
  const [SignIn, SetSignIn] = useReducer(SignInReducer, ReducerTypes as Types);
  const [Loading,SetLoading]=useState<boolean>(false);
  const Navgiate=useNavigate();
  useEffect(()=>{
    window.scrollTo({
  top: 0,
  // behavior: // Optional: Smooth scrolling animation
});},[])
   const  onSubmit= async( e:FormEvent)=>{
    SetLoading(true);
      e.preventDefault();
     const res=await SignInwithPassword(SignIn.Email,SignIn.Password);

     if(res.success)
     {
      window.location.reload();
     }
  }
  return (
    <Container>
      <MainContainer onSubmit={ onSubmit}>
        <BackButton>
          <RxCross2 style={{ height: "100%", width: "100%" }} onClick={props.OnClose} />
        </BackButton>
        <NameContiner>Sign In to Dweet</NameContiner>
        <DataContainer>
          <LabelContainer>E-mail</LabelContainer>
          <InputContainer
            placeholder="your@gmail.com"
            value={SignIn.Email}
            name="Email"
            onChange={(e) => {
              SetSignIn({ type: e.target.name, data: e.target.value });
            }}
          ></InputContainer>
        </DataContainer>
        <DataContainer>
          <LabelContainer>Password</LabelContainer>
          <InputContainer
            placeholder="Password"
            value={SignIn.Password}
            name="Password"
            onChange={(e) => {
              SetSignIn({ type: e.target.name, data: e.target.value });
            }}
          ></InputContainer>
        </DataContainer>
        <ForgetContainer>Forget your password?</ForgetContainer>
        <SubmitButton type="submit">
        {Loading && (
                <LoaderDiv>
              <Loader
                type="spinner-cub"
                color="white"
                style={{ position:"absolute", top:"2.9rem"}}
               
                // top="2.9rem"
                bgColor="white"
                // title={"spinner-cub"}
                size={50}
              ></Loader>
              </LoaderDiv>
            )}
          {!Loading&&<div>Sign In</div>}</SubmitButton>
        <ChangeContianer onClick={props.ChangeDiv}>Don't have an account? <div style={{color:"grey"}}>Signup</div></ChangeContianer>
      </MainContainer>
    </Container>
  );
}

export default SignIn;
