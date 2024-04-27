import React, { useContext } from 'react'
import styled from 'styled-components'
import Discover from"../../assests/Discover.jpg"
import Create from"../../assests/Create.jpg"
import Cookies from 'js-cookie'
import UserContext from '../../Store/AuthUser'
import { useNavigate } from 'react-router-dom'
const MainContainer=styled.div`
width: 100%;
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
width:48%;
position:relative;
height:225px;
object-fit: cover;
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
  const token=Cookies.get("token")
  const User=useContext(UserContext)
  const Navigate=useNavigate();
  const StartFundRaiserFunc=()=>{
       if(token)
       {
          Navigate("/fundraise");
       }
  }
  const DonateFund=()=>{
    Navigate("/discover")
  }
  return (
   <MainContainer>
    <ButtonContainer $image={Discover} onClick={DonateFund}><ClickContainer>Fund Someone</ClickContainer></ButtonContainer>
    <ButtonContainer $image={Create} onClick={()=>{if(User.isAuth&&User.UserRole=="USER")StartFundRaiserFunc}}><ClickContainer>Start Fundraising</ClickContainer></ButtonContainer>
   </MainContainer>
  )
}

export default SpecialButtons