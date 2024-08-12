import React from 'react'
import styled from 'styled-components'
const ButtonContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:100%;
`
const MainButton=styled.button`
width:45%;
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
    transition: .4s;
    padding:1rem 0rem;
    &:hover{
        background:#1758a5;
    }
`

const BackButton=styled.button`
width:45%;
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
    transition: .4s;
    padding:1rem 0rem;
    &:hover{
        background:#e4ecf7;
        border-color:#4a90e2;
    }
`
function Button() {
  return (
   <ButtonContainer>
    
    <BackButton>Back</BackButton>
    <MainButton>Continue</MainButton></ButtonContainer>
  )
}

export default Button