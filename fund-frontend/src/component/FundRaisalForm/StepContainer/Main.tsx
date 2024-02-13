import React,{useState} from "react";
import { StepArray } from "./StepArray";
import Styled from "styled-components";
const MainContainer = Styled.div`
display:flex;
flex-direction:column;
row-gap:12px;
width:100%;
justify-content:flex-start;
`;
const SubContainer = Styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
row-gap:0.5rem;
`;
const TopContainer = Styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;
const CircleContainer = Styled.div<DashBoardLinkPropsType>`
width: 55px;
height: 55px;
border-radius: 50%;
padding:1.2rem;
box-sizing:border-box;
font-weight: 700;
font-size: 16px;
line-height: 1;
text-align: center;
border:${(props) => (props.$active ? "1px solid  #4a90e2" : "1px solid #eef5fe")};
// border: 1px solid #4a90e2;
color: #2f435a;
cursor: pointer;
transition: .4s;
position: relative;
`;
const NameContainer=Styled.div<DashBoardLinkPropsType>`
color:${(props) => (props.$active ? " #4a90e2" : "#2f435a")};
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    width: calc(100% - 60px);
    padding-left: 28px;
`
const BottomContainer = Styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
// padding: 12px 0 12px 0px;
`;
interface DashBoardLinkPropsType {
    $active: boolean;
  }
interface lineContent{
    $active:boolean;
    $last:boolean
}
const LineContainer=Styled.div<lineContent>`
height:2rem;
border:1px solid #eef5fe;
margin-left:26px;
height: ${(props) => (props.$active ? "4.5rem" : (props.$last?"0rem":"2rem"))};
// width:1px
`
const   ContentContainer=Styled.div<DashBoardLinkPropsType>`
font-size: 12px;
width: calc(100% - 86px);
padding-left: 28px;
display: ${(props) => (props.$active ? "block" : "none")};
line-height: 170%;
color: #798798;
`
interface propsTtypes{
  FormState:number,
  back:(change:number)=>void;
  nextPage:(change:number)=>void;
}
function StepContainer(props:propsTtypes) {
    const [Step,SetStep]=useState(0)
  return (
    <MainContainer>
      {StepArray.map((item, index) => (
        <SubContainer>
          <TopContainer>
            <CircleContainer $active={index===props.FormState}>{item.id}</CircleContainer>
            <NameContainer $active={index===props.FormState}>{item.title}</NameContainer>
          </TopContainer>
          <BottomContainer>
            <LineContainer $active={index===props.FormState} $last={index===StepArray.length-1}></LineContainer>
            <ContentContainer  $active={index===props.FormState}>{item.Content}</ContentContainer>
          </BottomContainer>
        </SubContainer>
      ))}
    </MainContainer>
  );
}

export default StepContainer;
