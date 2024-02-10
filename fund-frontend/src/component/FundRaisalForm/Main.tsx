import React from "react";
import { styled } from "styled-components";
import StepContainer from "./StepContainer";
import FormContainer from "./FormContainer";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;
const FirstContainer = styled.div`
  color: #4a90e2;
  font-weight: 300;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  padding: 50px 0 30px;
`;
const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  // column-gap: 2rem;
  width: 57rem;
`;
const LeftContainer = styled.div`
  background: white;
  box-shadow: 0 1.9021px 3.53246px rgba(47, 67, 90, 0.0278729),
    0 5.25905px 9.76681px rgba(47, 67, 90, 0.04),
    0 12.6618px 23.5147px rgba(47, 67, 90, 0.0521271),
    0 42px 78px rgba(47, 67, 90, 0.08);
  width:335px;
  padding:30px 40px;
  position:sticky;
  top:1rem;
  border-radius:12px;
  margin-bottom:4rem;
  box-sizing:border-box;
`;
const RightContainer=styled.div`
background:none;
width: calc(100% - 360px);
margin-left: 60px;
// height:20rem;
// background:grey;
margin-bottom: 100px;
// padding-top: 25px;
}
`
function FormComponent() {
  return (
    <MainContainer>
      <FirstContainer>Kickstart Your Fundraising Endeavor</FirstContainer>
      <SecondContainer>
        <LeftContainer><StepContainer></StepContainer></LeftContainer>
        <RightContainer><FormContainer/></RightContainer>
      </SecondContainer>
    </MainContainer>
  );
}

export default FormComponent;
