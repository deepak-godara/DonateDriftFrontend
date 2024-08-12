import React, { FormEvent, ReducerState, useReducer ,useState,useEffect} from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import Loader from "react-js-loader";
import { SignUps } from "../../../backendApi/services/SignUp";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  // background: grey;
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
  left: 26rem;
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
const InputContainer1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DataContainer1 = styled.div`
  width: 49%;
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
padding-top:0.5rem;
text-align:center;
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content:center;
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
const ReducerTypes = {
  Name: "",
  Email: "",
  Password: "",
};
interface Types {
  Name: string;
  Email: string;
  Password: string;
}

const SignUpReducer = (
  state: Types,
  action: { type: string; data: string }
) => {
  const NewState = { ...state };
  if (action.type === "Name") NewState.Name = action.data;
  if (action.type === "Email") NewState.Email = action.data;
  if (action.type === "Password") NewState.Password = action.data;
  return NewState;
};
interface propstypes{
  OnClose:()=>void;
  ChangeDiv:()=>void;
}
function SignUp(props:propstypes) {
  const [SignUp, SetSignUp] = useReducer(SignUpReducer, ReducerTypes as Types);
  const [Loading,SetLoading]=useState<boolean>(false);
  useEffect(()=>{
    window.scrollTo({
  top: 0,
  // behavior: // Optional: Smooth scrolling animation
});},[])
  const OnSubmit=async (event:FormEvent)=>{
    event.preventDefault();
    SetLoading(true);
    const res=await SignUps(SignUp.Name,SignUp.Email,SignUp.Password)
    if(res.success)
      window.location.reload()
  }
  return (
    <Container>
      <MainContainer onSubmit={OnSubmit}>
        <BackButton>
          <RxCross2 style={{ height: "100%", width: "100%" }}  onClick={props.OnClose}/>
        </BackButton>
        <NameContiner>Sign Up to Dweet</NameContiner>
          <DataContainer>
            <LabelContainer>Name</LabelContainer>
            <InputContainer
              placeholder="Name"
              value={SignUp.Name}
              name="Name"
              onChange={(e) => {
                SetSignUp({ type: e.target.name, data: e.target.value });
              }}
            ></InputContainer>
          </DataContainer>
        <DataContainer>
          <LabelContainer>E-mail</LabelContainer>
          <InputContainer
            placeholder="your@gmail.com"
            value={SignUp.Email}
            name="Email"
            onChange={(e) => {
              SetSignUp({ type: e.target.name, data: e.target.value });
            }}
          ></InputContainer>
        </DataContainer>
        <DataContainer>
          <LabelContainer>Password</LabelContainer>
          <InputContainer
            placeholder="Password"
            value={SignUp.Password}
            name="Password"
            onChange={(e) => {
              SetSignUp({ type: e.target.name, data: e.target.value });
            }}
          ></InputContainer>
        </DataContainer>
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
          {!Loading&&<div>Sign Up</div>}</SubmitButton>
        <ChangeContianer onClick={props.ChangeDiv}>
          <div>Have an account?</div><div style={{color:"grey"}}> Login</div>

          </ChangeContianer>
      </MainContainer>
    </Container>
  );
}

export default SignUp;
