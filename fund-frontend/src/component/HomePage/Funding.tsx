import React from "react";
import styled from "styled-components";
const MainContainer=styled.div`

// width:30rem;
max-width:90%;
width:35rem;
z-index:500;
display:flex;
flex-direction:column;
align-items:center;
row-gap:1rem;
position:relative;
margin:5rem auto;`
const Container1=styled.div`
color: #2f435a;
    font-size: 28px;
    font-weight:bold;`
const Container2=styled.div`
color: #2f435a;
    font-size: 23px;`
    const MainButton = styled.button`
  width: 17rem;
  border-radius: 8px;
  border: 1px solid #eaebee;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  background: #4a90e2;
  color: #fff;
  border-color: #4a90e2;
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  padding: 1rem 0rem;
  &:hover {
    background: #1758a5;
  }
`;
function Funding(){
    const func=()=>{
        console.log("yes");
    }
    return(
        <MainContainer>
        <Container1>Powerful, Personal Fundraising</Container1>
        <Container2> Get started your Donation Drive from our website</Container2>
        <MainButton onClick={func}>Start Fundrasing</MainButton>
      </MainContainer>
    )
}
export default Funding;