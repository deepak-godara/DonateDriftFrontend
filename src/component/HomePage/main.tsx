import React, { useEffect } from 'react'
import Benefits from './Benefits'
import SpecialButtons from './SpecialButtons'
import SuccessFull from './SuccessFull'
import Funding from './Funding'
import HomeCategory from './CategoryHome'
import styled from 'styled-components'
import Amain from './MainPhoto'
const MainContainer=styled.div`
// width:100%;
/* position:relative; */
z-index:100;
`
function Main() {
  useEffect(()=>
    window.scrollTo({
      top: 0,
      // behavior: // Optional: Smooth scrolling animation
    }),[])
  return (
    <MainContainer>
      <Funding/>
    <Benefits/>
    <SuccessFull></SuccessFull>
    <HomeCategory/>
    <SpecialButtons/>
    </MainContainer>
  )
}

export default Main