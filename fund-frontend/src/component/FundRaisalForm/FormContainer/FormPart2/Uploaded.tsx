import React from "react";
import styled from "styled-components";
const UploadedPhotoDiv = styled.div``;
const MainContainer = styled.div`
  width: calc(33.33% - 16px);
  height: 116px;
  position: relative;
  border-radius: 12px;
`;
const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  z-index: 200;
  &:hover {
    z-index: 100;
  }
`;
const PhotoOption = styled.div`
  position: absolute;
  top: 0rem;
  width: 100%;
  border-radius: 12px;
  height: 100%;
  z-index: 150;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 0.5rem;
  padding: 0.5rem 0.2rem;

  background: rgba(47, 67, 90, 0.9);
  box-sizing: border-box;
  &:hover {
    z-index: 300;
  }
`;
const Item = styled.button`
  background: none;
  color: white;
  &:hover {
    background: none;
  }
`;
interface propTypes {
  index: number;
  photoarray: string;
  DeleteFunc: (index: number) => void;
  MakeCoverFunc: (image: string) => void;
}
function Uploaded(props: propTypes) {
  return (
    <MainContainer>
      <ImageContainer src={props.photoarray} alt="not availabel" />
      <PhotoOption>
        <Item onClick={()=>{
          props.MakeCoverFunc(props.photoarray)
        }}>Make cover</Item>
        <Item
          onClick={() => {
            props.DeleteFunc(props.index);
          }}
        >
          Remove
        </Item>
      </PhotoOption>
    </MainContainer>
  );
}

export default Uploaded;
