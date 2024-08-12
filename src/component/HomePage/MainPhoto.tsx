import React from "react";
import styled from "styled-components";
import Designer from "../../assests/Designer.png";
import Donatehome from"../../assests/Mainp.png";
const PhotoContinainer = styled.img`
  position:absolute;
    width: 100%;
    height: 100%;
  
`
const MainContainers=styled.div`
position:absolute;
top:-1rem;
left: 0rem;
width: 100%;
height: 650px;
// z-index:150;
`
const MainContainer=styled.div`

// width:30rem;
max-width:90%;
z-index:100;
display:flex;
flex-direction:column;
align-items:center;
row-gap:1rem;
position:relative;
margin:9rem auto;`
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

function Amain() {
 
  return (
    <MainContainers>
    <PhotoContinainer src={Donatehome} alt="no">

    </PhotoContinainer>
   
    </MainContainers>
  )
}

export default Amain;

