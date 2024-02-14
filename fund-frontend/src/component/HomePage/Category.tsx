import React from 'react'
import styled from 'styled-components'
import { CategoryArray } from './CategoryArray'
const MainContainer=styled.div`
width:100%;
`
const CategoryDiv=styled.div`
float: left;
width: calc(100% - 200px);
border-bottom: none;
margin-bottom: 26px;
margin-top: 8px;
display: flex;
align-items: flex-end;`

const NameDiv=styled.div`
margin-bottom: 40px;
    margin-bottom: 40px;
    justify-content: center;
    text-align: center;
    color: #2f435a;
    font-size: 32px;
    line-height: 1.5;
    font-weight: 700;`
const CategoryItem=styled.div`
font-size: 16px;
    line-height: 24px;
    padding: 0;
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
function Category() {
  return (
    <MainContainer>
        <NameDiv>Recently Successful</NameDiv>
    <CategoryDiv>
        {CategoryArray.map((item,index)=><CategoryItem>{item.content}</CategoryItem>)}
    </CategoryDiv>
    </MainContainer>
  )
}

export default Category