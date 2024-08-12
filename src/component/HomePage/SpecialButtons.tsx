import React, { useContext ,useState} from 'react'
import styled from 'styled-components'
import Discover from"../../assests/Discover.jpg"
import Create from"../../assests/Create.jpg"
import Cookies from 'js-cookie'
import UserContext from '../../Store/AuthUser'
import { useNavigate } from 'react-router-dom'
import ModalPortal from "../../ModalPortal";
import Authentication from "../Authentication";
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
  const [Display,SetDisplay]=useState<boolean>(false);
  const Navigate=useNavigate();
  const StartFundRaiserFunc=()=>{
       if(User.isAuth!=null&&User.UserRole==="USER")
       {
          Navigate("/fundraise");
       }
       else
       {
        SetDisplay(true);
       }
  }
  const DonateFund=()=>{
    Navigate("/discover")
  }
  return (
   <MainContainer>
    <ButtonContainer $image={Discover} onClick={DonateFund}><ClickContainer>Fund Someone</ClickContainer></ButtonContainer>
    <ButtonContainer $image={Create} onClick={StartFundRaiserFunc}><ClickContainer>Start Fundraising</ClickContainer></ButtonContainer>
    {Display&&<ModalPortal onClose={()=>{SetDisplay(false)}}><Authentication onClose={()=>{SetDisplay(false)}}/></ModalPortal>}
   </MainContainer>
  )
}

export default SpecialButtons