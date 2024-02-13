import React from 'react'
import styled from 'styled-components'
import Discover from"../../assests/Discover.jpg"
import Create from"../../assests/Create.jpg"
const MainContainer=styled.div`
width: 70vw;
display:flex;

margin:3rem auto;
flex-direction:row;
justify-content:space-between;
`
interface ImageProp{
    $image:string
}
const ButtonContainer=styled.div<ImageProp>`
background-image:url(${(props)=> props.$image});
width:470px;
position:relative;
height:225px;
border-radius:16px
`
const ClickContainer=styled.div`
padding:0.7rem 3rem;
 position:absolute;
 right:2rem;
 top:9rem;
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
 &:hover {
   background: #1758a5;
 }
`
function SpecialButtons() {
  return (
   <MainContainer>
    <ButtonContainer $image={Discover}><ClickContainer>Fund Someone</ClickContainer></ButtonContainer>
    <ButtonContainer $image={Create}><ClickContainer>Start Fundraising</ClickContainer></ButtonContainer>
   </MainContainer>
  )
}

export default SpecialButtons