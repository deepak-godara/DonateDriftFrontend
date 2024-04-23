import React from "react";
import styled from "styled-components";
import Loader from "react-js-loader";
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const MainButton = styled.button`
  width: 45%;
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

const BackButton = styled.button`
  width: 45%;
  border-radius: 8px;
  border: 1px solid #eaebee;
  background: #fff;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  // background: #4a90e2;
  color: #798798;
  // border-color: #4a90e2;
  cursor: pointer;
  transition: 0.4s;
  padding: 1rem 0rem;
  &:hover {
    background: #e4ecf7;
    border-color: #4a90e2;
  }
`;
const LoaderDiv=styled.div`
// position:absolute;
margin:0rem auto;
margin-bottom:2.5rem;
top:0.4rem;
`
interface propTypes{
  Name:string,
  Loading:boolean,
    SubmitFunc:()=>void
    BackFunc:(change:number)=>void
}
function Button(props:propTypes) {
  return (
    <ButtonContainer>
      <BackButton onClick={()=>props.BackFunc(1)}>Back</BackButton>
      <MainButton onClick={props.SubmitFunc}>
        {props.Loading && <LoaderDiv><Loader  type="spinner-cub"
                color="white"
                bgColor="white"
                size={50} /></LoaderDiv>}
        {!props.Loading&&<div>{props.Name}</div>}</MainButton>
    </ButtonContainer>
  );
}

export default Button;
