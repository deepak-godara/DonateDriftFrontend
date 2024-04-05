import React from 'react'
import styled from 'styled-components'
import Main from '../component/Authentication/main'
import { ItemArray } from './UserItem'
import Navbar from '../component/NavBar/navbar'
const MainContainer=styled.div`
width:80vw;
min-width:60rem;
height:100vh;
margin:0rem auto;
`
const NavContainer=styled.div`
width:100%;
height:8%;
display:flex;
flex-direction:row;
justify-content:space-between;
margin:0rem 15%;
box-sizing:border-box;
`
function main() {
  return (
    <MainContainer>
        {/* <Navbar DropDown={ItemArray}></Navbar> */}
    </MainContainer>
  )
}

export default main