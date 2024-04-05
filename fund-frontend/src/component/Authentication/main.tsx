import React ,{useEffect, useState}from "react";
import { BsTwitterX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ModalPortal from "../../ModalPortal";
const MainContainer = styled.div`
  // width: 100%;/
  // height: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  position:relative;
  z-index:800;
  justify-content: space-between;
`
const Container1=styled.div`
width
`
interface proptypes{
  onClose:()=>void;
}
function Main(props:proptypes) {
  // console.log("jij")
    const navigate = useNavigate();
    const [div1,SetDiv1]=useState<boolean>(false)
  return (
    // <ModalPortal>
    <MainContainer>
       {div1&&<SignIn OnClose={props.onClose} ChangeDiv={()=>SetDiv1(false)}/>}
       {!div1&&<SignUp OnClose={props.onClose} ChangeDiv={()=>SetDiv1(true)}/>}
     </MainContainer>
    //  </ModalPortal>
  );
}

export default Main;
