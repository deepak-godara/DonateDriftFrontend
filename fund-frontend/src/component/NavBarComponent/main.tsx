import React, { useContext } from 'react'
import styled from 'styled-components'
import { useCombobox } from "downshift";
import UserContext from '../../Store/AuthUser';
import { ItemArray } from '../../User/UserItem';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';
const MainContainer=styled.div`
width:100%;
margin:0rem auto;
height:4rem;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;

`
const Container1=styled.div`
width:15%;
height:100%;
// text-algin:center;
position:relative;

`
const Cont1Sub1=styled.div`
color:black;
font-weight:700;
position:absolute;
top:0rem;
font-size:28px;
`
const Cont1Sub2=styled.div`
color:black;
font-weight:700;
font-size:28px;
position:absolute;
top:2rem;
padding-left:3rem;
`
const Container2=styled.div`
width:85%;
// max-width:40rem;
height:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
algin-items:center;
`


const SubContainer1=styled.div`
max-width:50%;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
column-gap:1.5rem
`
const Sub1Element=styled.div`
font-weight: 700;
font-size: 14px;
line-height: 1.5;
color: #798798;
`
const SubContainer2=styled.div`
max-width:50%;
display:flex;
height:100%;
flex-direction:row;
justify-content:flex-start;
align-items:center;
column-gap:1.5rem
`
const Sub2Element=styled.div`
color:#4a90e2;
font-weight: 700;
font-size: 14px;
border-right: 1px solid #f5f6f7;;
padding-right:1.5rem;
`
const ProfileContainer=styled.div`
height:100%;
display:flex;
position:relative;
flex-direction:row;
justify-content:flex-start;
align-items:center;
column-gap:1rem
`
const ImageContainer=styled.img`
height:2.5rem;
width:2.5rem;
background:#eef5fe;
border-radius:50%;
`
const DropDownContainer=styled.button`
color: #798798;
font-weight: 700;
background:white;
border:none; g
font-size: 14px;
`
const DropDown = styled.ul`
  position: absolute;
  left: -120px;
  z-index:105;
//   right: -1px;
  top: 55px;
  width:13rem;
  bottom: auto !important;
  background: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  // display:flex;
  flex-direction: column;
  row-gap: 0.3rem;
  padding: 0.5rem 0.4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
//   max-height: 240px;
  overflow: auto;
  overflow-x: hidden;
  list-style: none;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eaebee;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: white; /* Color of the scrollbar track */
  }
  background: #fff;
`;
// const ItemDiv=styled.
const ListItem = styled.li`
  font-size: 16px;
  line-height: 1.5;
  padding: 0.2rem 0.2rem;
  color: #2f435a;
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-bottom:0.5rem;
  // position: static!important;
  transform: translate(0) !important;
`;
const ItemIcon=styled.div`
height:1.25rem;
width:1.25rem;
color: #2f435a;
padding-right:0.5rem;
`
const ItemContent=styled.div`
font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    color: #2f435a;
`
const LogOutDiv=styled.div`
`
function Main() {
    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getMenuProps,
        getItemProps,
      } = useCombobox({
        items: ItemArray,
      });
      const usercontext=useContext(UserContext);
  return (
    <MainContainer>
        <Container1>
            <Cont1Sub1>Donate</Cont1Sub1>
            <Cont1Sub2>Drift</Cont1Sub2>
        </Container1>
        <Container2>
            <SubContainer1>
                <Sub1Element>How it works</Sub1Element>
                <Sub1Element>FAQ</Sub1Element>
            </SubContainer1>
            <SubContainer2>
                <Sub2Element>Start Fundraising</Sub2Element>
                <ProfileContainer>
                    <ImageContainer src={usercontext.UserPhoto?usercontext.UserPhoto:"none"}></ImageContainer>
                    <DropDownContainer {...getToggleButtonProps()}>{usercontext.UserName}</DropDownContainer>
                    <DropDown
        {...getMenuProps()}
        style={{ listStyle: "none", display: isOpen ? "flex" : "none" }}
      >
                {isOpen&&(
                    <>
                    {ItemArray.map((item, index) => (
                        <Link to={item.Link} style={{textDecoration:"none"}}>
              <ListItem
                {...getItemProps({
                  key: index,
                  index,
                  item,
                //   style: {
                //     backgroundColor:
                //       highlightedIndex === index||selectedItem === item ? "#d9e6f5" : "white",
                //     fontWeight: selectedItem === item ? "bold" : "normal",
                //   },
                })}
              >
                <ItemIcon>
               <item.Icon style={{height:"100%", width:"100%",color:" #2f435a"}}/>
               </ItemIcon>
               <ItemContent>{item.Content}</ItemContent>
              </ListItem>
              </Link>
            ))}
            <LogOut/>

                    </>
                )}
                </DropDown>
                </ProfileContainer>
                
            </SubContainer2>
        </Container2>
    </MainContainer>
  )
}

export default Main