import React from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../component/NavBar/navbar";
import Footer from "../../component/Footer/Footer";
import NavBarComponent from "../../component/NavBarComponent";
import Amain from "../../component/HomePage/MainPhoto";

interface widths{
  $width:string
}
const MainContainer = styled.div<widths>`
  width: 60rem;
  width:${(props)=>`${props.$width}`};
  max-width: 95%;
  position: relative;
  z-index: 100;
  margin: 0rem auto;
  box-sizing: border-box;
`;

const NavContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const BodyContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;
  box-sizing: border-box;
`;

function Main() {
  const location = useLocation();
  const currentPath = location.pathname;
  
console.log(location)
  return (
    <div >
    <MainContainer $width={currentPath==='/'?"60rem":"60rem"}>
    
      <NavContainer>
        <NavBarComponent />
      </NavContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    
    </MainContainer>
    <Footer />
    </div>
  );
}

export default Main;