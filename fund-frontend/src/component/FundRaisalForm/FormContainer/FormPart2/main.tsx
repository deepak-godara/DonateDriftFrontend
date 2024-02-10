import React, { useState, useReducer, useRef, useEffect } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import draftToHtml from "draftjs-to-html";
import { convertToRaw, EditorState } from "draft-js";
import { CiCirclePlus } from "react-icons/ci";
import "../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Forminput from "../../../../FunctionalCompos/input";
import "./editor.css";
import Editors from "./Editor";
import { InputFiles } from "typescript";
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 2rem;
  margin-bottom: 2rem;
`;
const FirstData = styled.div`
  color: #2f435a;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 300;
`;
const SecondData = styled.div`
  color: #6ec052;
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 10px;
  font-weight: 600;
`;
const Content1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.8rem;
`;
const MainPhotoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 1.5rem;
`;
const PhotoAddContainer = styled.button`
  width: 100%;
  border: 1px solid #ccc;
  background: none;
  z-index: 200;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 316px;
  cursor: pointer;
  color: rgba(121, 135, 152, 0.55);
  &:hover {
    background: #eef5fe;
    border: 1px solid #4a90e2;
    color: #4a90e2;
  }
  position: relative;
  transition: 0.4s;
`;
const PlusLogo = styled(CiCirclePlus)`
  height: 35px;
  width: 35px;
  // border
  font-weight: 400;
  // color: rgba(121,135,152,.55);
  font-size: 28px;
`;
const UploadedPhotoDiv=styled.div`
`
const UploadedPhoto=styled.div`
height:10rem;
width:10rem;
border-radius:12px;
`
const UploadContainer = styled.div`
  // color: rgba(121,135,152,.55);
  // transition: .4s;
  width: 100%;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  // color: rgba(121,135,152,.5);
`;
const PhotoInput = styled.input`
  display: none;
`;
const ReducerTypes = {
  FundraiserStory: { __html: "<p></p><h1></h1>" }, // Initial HTML content
  MainCoverPhoto: "",
  FundraiserPhotos: [],
  VideoUrl: "",
};

interface Types {
  FundraiserStory: { __html: string }; // Use dangerouslySetInnerHTML format
  MainCoverPhoto: string;
  FundraiserPhotos: Array<string>;
  VideoUrl: string;
}

const FormInformationReducer = (
  state: Types,
  action: { type: string; value: string | HTMLElement }
) => {
  const newState = { ...state };

  if (action.type === "FundraiserStory") {
    if (typeof action.value === "string") {
      newState.FundraiserStory = { __html: action.value };
    } else if (action.value instanceof HTMLElement) {
      newState.FundraiserStory = { __html: action.value.outerHTML };
    }
  } else if (action.type === "VideoUrl" && typeof action.value === "string") {
    newState.VideoUrl = action.value;
  } else if (
    action.type === "FundraiserPhotos" &&
    typeof action.value === "string"
  ) {
    newState.FundraiserPhotos.push(action.value);
  } else if (typeof action.value === "string") {
    newState.MainCoverPhoto = action.value;
  }

  return newState;
};
function FormCantainer2() {
  const photoref = useRef<HTMLInputElement>(null);
  const [FormInfo2, SetFormInfo2] = useReducer(
    FormInformationReducer,
    ReducerTypes as Types
  );
  const handleAddImageClick = () => {
    if (photoref.current) photoref.current.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const Image = event.target.files?.[0];
    if (Image) {
      const reader = new FileReader();
      reader.readAsDataURL(Image);
      reader.onload = () => {
        // props.AddImage(reader.result);
        console.log(typeof reader.result);
      };
    }
  };
  const handleEditorChange = (content: EditorState) => {
    SetFormInfo2({
      type: "FundraiserStory",
      value: draftToHtml(convertToRaw(content.getCurrentContent())),
    });
    console.log(FormInfo2.FundraiserStory);
  };
  return (
    <MainContainer>
      <FirstData>Fundraiser Story</FirstData>
      <Content1>
        <SecondData>Your fundraiser story</SecondData>
        <Editors handleEditorChange={handleEditorChange} />
      </Content1>
      <Content1>
        <SecondData>Upload fundraiser photos</SecondData>
        <MainPhotoContainer>
          <PhotoAddContainer onClick={handleAddImageClick}>
            <PhotoInput
              ref={photoref}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            ></PhotoInput>
            <PlusLogo />
            <UploadContainer>Upload your fundraiser photos</UploadContainer>
          </PhotoAddContainer>
        </MainPhotoContainer>
      </Content1>
      <Content1>
        <SecondData>Your video URL</SecondData>
        <Forminput
          width="100%"
          type="string"
          label="Video URL"
          placeholder=" Add your video url"
          value={FormInfo2.VideoUrl}
          name="VideoUrl"
          ChangeFunc={(type, value) => {
            SetFormInfo2({ type, value });
          }}
        ></Forminput>
      </Content1>
    </MainContainer>
  );
}

export default FormCantainer2;
