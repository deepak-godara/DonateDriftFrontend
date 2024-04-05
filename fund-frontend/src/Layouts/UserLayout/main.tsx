import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../../component/NavBarComponent";
const MainContainer = styled.div`
  width: 55rem;
  max-width: 95%;
margin:0rem auto;
  box-sizing: border-box;
`;
const NavContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const BodyContainer=styled.div`
width:100%;
boc-sizing:border-box;
`
function main() {
  return (
    <MainContainer>
      <NavContainer>
        <NavBarComponent />
      </NavContainer>
      <BodyContainer>
<Outlet/>
      </BodyContainer>
    </MainContainer>
  );
}

export default main;
