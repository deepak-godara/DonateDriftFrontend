import React from 'react'
import styled from 'styled-components'
const UploadedPhotoDiv=styled.div`
`
const MainContainer=styled.div`
height:10rem;
width:10rem;
border-radius:12px;
`
const ImageContainer=styled.img`
width:100%;
height:100%;
border-radius:12px;
z-index:200;
&::hover{
    z-index:100;
}`
const PhotoOption=styled.div`
position:absolute;
z-index:150;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:0.5rem 0.2rem;

background:rgba(47,67,90,.9);
box-sizing:border-box;
`
const Item=styled.button`
background:none;
color:white;
`
interface propTypes{
    index:Number,
    photoarray:string
}
function Uploaded(props:propTypes) {
  return (
   <MainContainer>
<ImageContainer src={props.photoarray} alt="not availabel"/>
<PhotoOption>
<Item>Make cover</Item>
<Item>Remove</Item>
</PhotoOption>
   </MainContainer>
  )
}

export default Uploaded