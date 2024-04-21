import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/NavBar/navbar";
import Footer from "../../component/Footer/Footer";
import NavBarComponent from "../../component/NavBarComponent";
const MainContainer = styled.div`
  width: 60rem;
  max-width: 95%;
  position:relative;
  z-index:100;
margin:0rem auto;
  box-sizing: border-box;
`;
const NavContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const BodyContainer=styled.div`
width:100%;
position:relative;
z-index:100;
boc-sizing:border-box;
`
function main() {
  return (
    <MainContainer>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <BodyContainer>
<Outlet/>
      </BodyContainer>
      <Footer/>
    </MainContainer>
  );
}

export default main;
