import React from "react";
import styled from "styled-components";
import { CatgeoryArray2 } from "./HomeCategory";
const colorsArray=[
  "rgb(249, 233, 233)",
  "rgb(247, 241, 249)",
  "rgb(241, 254, 238)",
  "rgb(247, 241, 249)",
]
const MainContainer = styled.div`
  width: 100%;
`;
const NameContainer = styled.div`
  margin-bottom: 40px !important;
  justify-content: center;
  text-align: center;
  color: #2f435a;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 700;
`;
const PostMainContainer = styled.div`
  display: flex;
  width:99%;
  margin:0rem auto;
  flex-direction: row;
  box-sizing:border-box;
  column-gap:1rem;
  justify-content:space-between;
  flex-wrap: wrap;
`;
interface propPost{
  $indexs:number
}
const PostContainer = styled.div<propPost>`
  background: ${(props)=>colorsArray[props.$indexs%4]};
  border-color: rgb(253, 230, 237);
  // width: 100%;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  height: 216px;
  width: 183px !important;
  box-sizing:border-box;
  padding: 24px 20px 20px;
  float: left;
  position: relative;
  border-radius: 16px;
  // margin-left: 24px;
  margin-bottom: 30px;
  transition: 0.3s;
  border: 1px solid transparent;
`;
const ImageContainer=styled.img`
height:4rem;
width:4rem;
// position:absolute;
// top:1rem;
// left:1rem;.
margin:0.5rem 0rem 0rem 0.5rem;
`
const ContentContainer=styled.div`
    font-size: 20px;
    margin-bottom: 8px;
    color: #2f435a;
    width:100%;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    // white-space: normal;
    font-size: 22px;
    line-height: 1.5;
    font-weight: 700;
}
`
function HomeCategory() {
  return (
    <MainContainer>
      <NameContainer>Fundraising Categories</NameContainer>
      <PostMainContainer>
        {CatgeoryArray2.map((item, index) => (
          <PostContainer $indexs={index}>
            <ImageContainer src={item.Image}></ImageContainer>
            <ContentContainer>{item.Name}</ContentContainer>
          </PostContainer>
        ))}
      </PostMainContainer>
    </MainContainer>
  );
}

export default HomeCategory;
