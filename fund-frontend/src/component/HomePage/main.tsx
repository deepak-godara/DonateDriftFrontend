import React from 'react'
import Benefits from './Benefits'
import SpecialButtons from './SpecialButtons'
import SuccessFull from './SuccessFull'
import HomeCategory from './CategoryHome'
import styled from 'styled-components'
const MainContainer=styled.div`
// width:100%;
position:relative;
z-index:100;
`
function main() {
  return (
    <MainContainer>
    <Benefits/>
    <SuccessFull></SuccessFull>
    <HomeCategory/>
    <SpecialButtons/>
    </MainContainer>
  )
}

export default main