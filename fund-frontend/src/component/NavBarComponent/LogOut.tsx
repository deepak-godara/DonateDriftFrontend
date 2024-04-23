import React from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { useContext } from 'react';
import UserContext from '../../Store/AuthUser';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
const ItemIcon=styled.div`
height:1.25rem;
width:1.25rem;
color:black;
padding-right:0.5rem;
`
const ListItem = styled.li`
  font-size: 16px;
  line-height: 1.5;
  padding: 0.2rem 0.2rem;
  color: #2f435a;
  display:flex;
  padding-top:1rem;
  border-top:1px solid grey;
  flex-direction:row;
  align-items:center;
  margin-bottom:0.5rem;
  // position: static!important;
  transform: translate(0) !important;
`;
const ItemContent=styled.div`
font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    color: #2f435a;
`
function LogOut() {
  const navigate=useNavigate();
  const user=useContext(UserContext)
  const LogOuts=()=>{
    const token=Cookies.get("token");
    if(token)
      {
        Cookies.remove("token");
        if(user.LogOutUser)
        user.LogOutUser()
        navigate("/")
        window.location.reload();
      }
  }
  return (
    <ListItem>
         <ItemIcon>
               <IoIosLogOut  style={{height:"100%", width:"100%",    color: "#2f435a"}}/>
               </ItemIcon>
               <ItemContent  onClick={LogOuts}>LogOut</ItemContent>
    </ListItem>
  )
}

export default LogOut