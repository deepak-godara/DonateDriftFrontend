import React from "react";
import styled from "styled-components";
import LeftContainer from "./LeftContainer";
import DonationForm from "./LeftContainer/DonationForm";
const MainContainer = styled.div`
  margin-top: 52px;
  width: 100%;
  position:relative;
  justify-content: space-between !important;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  &:-webkit-scrollbar{
    width:0;
  }
`
interface propTypes{
    FundRaiserPhotos:Array<string>,
    FundRaiserStory:string,
    Donors:Array<{Name:string,Date:string,Amount:number,comment:string}>
}
function main(props:propTypes) {
  return (
    <MainContainer>
        <LeftContainer  FundRaiserPhotos={props.FundRaiserPhotos}
        FundRaiserStory={props.FundRaiserStory}
        Donors={props.Donors} />
        <DonationForm></DonationForm>
    </MainContainer>
  )
}

export default main;
