import React from "react";
import styled from "styled-components";
import { CategoryArray } from "./CategoryArray";
const MainContainer = styled.div`
  width: 100%;
  display: block;
`;
const CategoryDiv = styled.div`
  float: left;
  width: calc(100% - 200px);
  border-bottom: none;
  margin-bottom: 26px;
  margin-top: 8px;
  display: flex;
  align-items: flex-end;
`;

const NameDiv = styled.div`
  margin-bottom: 40px;
  margin-bottom: 40px;
  justify-content: center;
  text-align: center;
  color: #2f435a;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 700;
`;
const CategoryItem = styled.div`
  font-size: 23px;
  line-height: 24px;
  padding: 0 0.2rem;
  padding-bottom: 0.7rem;
  margin-right: 40px;
  min-width: auto;
  text-align: center;
  font-weight: 700;
  color: #798798;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Explore=styled.div`
font-size: 23px;
  line-height: 24px;
  padding: 0.6rem 0rem;
  // padding-bottom: 0.7rem;
  margin-right: 40px;
  min-width: auto;
  text-align: center;
  font-weight: 700;
  color: #798798;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
interface propTypes {
  category: string;
  ChangeFunc:(data:string)=>void;
}
function Category(props: propTypes) {
  return (
    <MainContainer>
      <NameDiv>Recently Successful</NameDiv>
      <CategoryDiv>
        {CategoryArray.map((item, index) => (
          <CategoryItem onClick={()=>props.ChangeFunc(item.content)}
            style={{
              borderBottom: `${
                item.content === props.category ? "2.5px solid #4a90e2" : "none"
              }`,
              color: `${
                item.content === props.category ? " #4a90e2" : "#798798"
              }`,
            }}
          >
            {item.content}
          </CategoryItem>
        ))}
      </CategoryDiv>
      <Explore> All categories</Explore>
    </MainContainer>
  );
}

export default Category;
