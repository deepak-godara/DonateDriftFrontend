import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Story from "./Story";
import Donors from "./Donors";
import FundUpdates from "./Updates/main";
const MainContainer = styled.div`
  width: 63.5%;
  margin-bottom: 3rem;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  margin: 0 !important;
`;

const MainList = styled.div`
  position: static;
  width: auto;
  top: 0px;
  -ms-overflow-style: none;
  border-bottom: 3px solid #f5f6f7;
  background: #fff;
  z-index: 99;
  display: flex;
  position: sticky;
  top: 0rem;
  //   height:50px;
  align-items: flex-end;
  overflow-x: initial;
  flex-wrap: nowrap;
`;
const ListItem = styled.div`
  width: 122px;
  border: 0 solid transparent;
  min-width: auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  line-height: 150%;
  color: #798798;
  //   border-bottom:3px solid green;
  position: relative;
  padding: 0;
  //   height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const GreenBorder = styled.div`
  width: 122px;
  position: absolute;
  border-bottom: 3px solid #53ca8b;
  top: 2.7rem;
`;

interface propTypes {
  FundRaiserPhotos: Array<string>;
Id:number,
  FundRaiserStory: string;
  Donors: Array<{
    Name: string;
    Date: string;
    Amount: number;
    comment: string;
  }>;
}

function Main(props: propTypes) {
  const [Divs, SetDivs] = useState<number>(0);
  const ChangeDiv = (index: number) => {
    const l = 122 * index;
    SetDivs(l);
  };
  return (
    <MainContainer>
      <MainList>
        <ListItem
          style={{ color: `${Divs === 0 ? "black" : "#798798"}` }}
          onClick={() => ChangeDiv(0)}
        >
          Story
        </ListItem>
        <ListItem
          style={{ color: `${Divs === 122 ? "black" : "#798798"}` }}
          onClick={() => ChangeDiv(1)}
        >
          Updates
        </ListItem>
        <ListItem
          style={{ color: `${Divs === 244 ? "black" : "#798798"}` }}
          onClick={() => ChangeDiv(2)}
        >
          Donors
        </ListItem>
        <ListItem
          style={{ color: `${Divs === 366 ? "black" : "#798798"}` }}
          onClick={() => ChangeDiv(3)}
        >
          Followers
        </ListItem>
        <GreenBorder style={{ left: `${Divs}px` }}></GreenBorder>
      </MainList>
      {Divs === 0 && (
        <Story
          FundRaiserPhotos={props.FundRaiserPhotos}
          FundRaiserStory={props.FundRaiserStory}
          Donors={props.Donors}
        ></Story>
      )}
       {Divs === 244 && (
        <Donors
          Donors={props.Donors}
        ></Donors>
      )}
      {Divs===122&&(<FundUpdates id={props.Id}></FundUpdates>)}
    </MainContainer>
  );
}

export default Main;
