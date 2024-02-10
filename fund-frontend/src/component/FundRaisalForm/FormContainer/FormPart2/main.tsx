import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Quill } from "react-quill";
import Main from "../FormPart1/main";
const EditiorArea = styled.div`
  min-height: 12rem;
  width: 100%;
`;
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
const Content1=styled.div`
display: flex;
width:100%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
row-gap: 0.8rem;` 
const MainPhotoContainer=styled.div`
display:flex;
width:100%;
flex-direction:column;
justify-content:flex-start;
row-gap:1.5rem;`
const PhotoAddContainer=styled.div`
 width:100%;
 border: 1px solid #eaebee;
 border-radius: 8px;
 display: flex;
 align-items: center;
 justify-content: center;
 align-content: center;
 flex-wrap: wrap;
 height: 316px;
 cursor: pointer;
 position: relative;
 transition: .4s;
`
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["table"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "indent",
  "table",
  "link",
  "image",
];

function FormCantainer2() {
  const [editorContent, SetEditorContent] = useState("");
  const handleEditorChange = (content: string) => {
    console.log(content);
  };
  return (
    <MainContainer>
        <FirstData>Fundraiser Story</FirstData>
        <Content1>
            <SecondData>Your fundraiser story</SecondData>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorContent}
        onChange={handleEditorChange}
      >
        <EditiorArea />
      </ReactQuill>
      </Content1>
      <Content1>
        <SecondData>Upload fundraiser photos</SecondData>
<MainPhotoContainer>
    <PhotoAddContainer></PhotoAddContainer>
</MainPhotoContainer>
      </Content1>
    </MainContainer>
  );
}

export default FormCantainer2;
