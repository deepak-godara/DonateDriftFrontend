import React, { useState, useReducer, useRef, useEffect } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import draftToHtml from "draftjs-to-html";
import { convertToRaw, EditorState } from "draft-js";
import Uploaded from "./Uploaded";
import { CiCirclePlus } from "react-icons/ci";
import "../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Forminput from "../../../../FunctionalCompos/input";
import "./editor.css";
import Editors from "./Editor";
// import { GetUrl } from "./Uploaded";
import Button from "../../../../FunctionalCompos/Button";
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
const PhotoAddContainer = styled.button<widthprops>`
  width: ${(props) => (props.$displays ? "calc(33.33% - 16px)" : "100%")};
  border: 1px solid #ccc;
  background: none;
  z-index: 200;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: ${(props) => (props.$displays ? "116px" : "361px")};
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
interface widthprops {
  $displays: boolean;
}
const PhotoContainer1 = styled.img<widthprops>`
  height: 316px;
  width: 100%;
  border-radius: 12px;
  display: ${(props) => (props.$displays ? "block" : "none")};
`;
const Division = styled.div`
  width: 100%;
  border: 1px solid #e2e3e5;
`;
const PhotoContainer2 = styled.div`
  width: 100%;
  //  border-radius:12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  flex-wrap: wrap;
`;
const UploadContainer = styled.div`
  // color: rgba(121,135,152,.55);
  // transition: .4s;
  width: 100%;
  height: fit-content;
  word-wrap: break-word; /* This property allows long words to be able to be broken and wrap onto the next line. */
  overflow-wrap: break-word; /* Alternative property, similar to word-wrap */
  white-space: normal;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  // color: rgba(121,135,152,.5);
`;
const PhotoInput = styled.input`
  display: none;
`;
const ReducerTypes = {
  FundraiserStory: {content: "",valid:true}, // Initial HTML content
  UseMainCover:{content:"",valid:true},
  MainCoverPhoto:{ content:undefined,valid:true},
  UseFundraiserPhotos:{content:[],valid:true},
  FundraiserPhotos:{content:[],valid:true},
  VideoUrl:{content: "",valid:true},
};

export interface Types {
  FundraiserStory: {content:string ,valid:boolean}; // Use dangerouslySetInnerHTML format
  MainCoverPhoto:{content:File|undefined,valid:boolean};
  FundraiserPhotos: {content:Array<File>,valid:boolean};
  UseMainCover:{content:string,valid:boolean};
  UseFundraiserPhotos: {content:Array<string>,valid:boolean};
  VideoUrl:{content:string,valid:boolean};
}

const FormInformationReducer = (
  state: Types,
  action: { type: string; value: string | HTMLElement | number|File|undefined,valid?:boolean }
) => {
  const newState = { ...state };
  if(action.valid!==undefined)
  {
     if(action.type==="FundRaiserStory")
     newState.FundraiserStory.valid=action.valid;
     else if(action.type==="FundRaiserPhotos")
     newState.FundraiserPhotos.valid=action.valid;
     else if(action.type==="MainCover")
     newState.MainCoverPhoto.valid=action.valid;
     else
     newState.VideoUrl.valid=action.valid;
  }
  else{
  if (action.type === "FundraiserStory") {
    if (typeof action.value === "string") {
      newState.FundraiserStory.content =  action.value ;
    } else if (action.value instanceof HTMLElement) {
      newState.FundraiserStory.content =  action.value.outerHTML ;
    }
  } else if (action.type === "VideoUrl" && typeof action.value === "string") {
    newState.VideoUrl.content = action.value; newState.VideoUrl.valid=true
  } else if (
    action.type === "FundraiserPhotos" &&
     action.value instanceof File
  ) {
    newState.FundraiserPhotos.content.push(action.value); newState.FundraiserPhotos.valid=true
  }
  else if (
    action.type === "UseFundraiserPhotos" &&
     typeof action.value==="string"
  ) {
    newState.UseFundraiserPhotos.content.push(action.value); newState.UseFundraiserPhotos.valid=true
    newState.UseFundraiserPhotos.content= newState.UseFundraiserPhotos.content.filter((item, index, self) => {
      // Return true if the current item is the first occurrence in the array
      return self.indexOf(item) === index;
  })
  }
   else if (
    action.type === "DeleteImage" &&
    typeof action.value === "number"
  ) {
    newState.FundraiserPhotos.content = newState.FundraiserPhotos.content.filter(
      (item, index) => index !== action.value
    );
    newState.UseFundraiserPhotos.content = newState.UseFundraiserPhotos.content.filter(
      (item, index) => index !== action.value
    );
  }
   else if (action.type === "MakeCover" && action.value instanceof File) {
    newState.MainCoverPhoto.content = action.value; newState.MainCoverPhoto.valid=true
  }
  else if (action.type === "UseMakeCover" && typeof action.value==="string") {
    newState.UseMainCover.content = action.value; newState.MainCoverPhoto.valid=true
  }
  newState.FundraiserPhotos.content = newState.FundraiserPhotos.content.filter(
    (value, index, self) => {
      return self.indexOf(value) === index;
    }
  );
  }
  if (newState.FundraiserPhotos.content.length < 2) {
    newState.MainCoverPhoto.content = newState.FundraiserPhotos.content[0];
  }
  if (newState.UseFundraiserPhotos.content.length < 2) {
    newState.UseMainCover.content = newState.UseFundraiserPhotos.content[0];
  }
// console.log("hii");
  console.log(newState);
  return newState;
};
interface proptypes{
  LastFunc:(change:number)=>void;
  NextFunc:(change:number)=>void;
  FormFunc:(Data: Types )=>void;
Subunc:( )=>void;
state:number
}
function FormCantainer2(props:proptypes) {
  const photoref = useRef<HTMLInputElement>(null);
  const [FormInfo2, SetFormInfo2] = useReducer(
    FormInformationReducer,
    ReducerTypes as Types
  );
  const [Count,SetCount]=useState<number>(0);
  const handleAddImageClick = () => {
    if (photoref.current) photoref.current.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const Image = event.target.files?.[0];
    if (Image) {
      const reader = new FileReader();
      reader.readAsDataURL(Image);
      reader.onload = () => {
        if (typeof reader.result === "string")
          if (!FormInfo2.FundraiserPhotos.content.includes(Image)) {
            SetFormInfo2({ type: "FundraiserPhotos", value: Image });
            SetFormInfo2({ type: "UseFundraiserPhotos", value: reader.result })
          SetCount(Count+1);
          }
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
  const DeleteFunc = (index: number) => {
    SetFormInfo2({ type: "DeleteImage", value: index });
    SetCount(Count-1);
  };
  const MakeCover = (image: File,Image2:string) => {
    console.log("hii  " + image);
    SetFormInfo2({ type: "MakeCover", value: image });
    SetFormInfo2({ type: "UseMakeCover", value: Image2 });
  };
  const[state,setStatw]=useState<number>(0);
  const CheckValidity=()=>{
    let count=0;
    console.log("sdvs")
    if(FormInfo2.VideoUrl.content=== "")
    {
      SetFormInfo2({valid:false,type:"VideoUrl",value:""})
       count++;
    }
    if(FormInfo2.FundraiserPhotos.content.length===0)
    {
      SetFormInfo2({valid:false,type:"FundRaiserPhotos",value:""})
      count++;
    }
    if(FormInfo2.MainCoverPhoto.content===undefined)
    {
      SetFormInfo2({valid:false,type:"MainCover",value:undefined})
      count++;
    }
    if(count===0)
    {
      props.FormFunc(FormInfo2);
      props.NextFunc(1);
  }
  }
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
          <PhotoContainer1
            $displays={FormInfo2.FundraiserPhotos.content.length > 0}
            src={FormInfo2.UseMainCover.content}
          ></PhotoContainer1>
          <PhotoContainer2>
            {FormInfo2.FundraiserPhotos.content.map((item, index) => (
              <Uploaded
                MakeCoverFunc={MakeCover}
                DeleteFunc={DeleteFunc}
                index={index}
                photoarray={FormInfo2.UseFundraiserPhotos.content[index]}
                imageFile={item}
              />
            ))}
            {Count<5&&
            <PhotoAddContainer
              $displays={FormInfo2.FundraiserPhotos.content.length > 0}
              onClick={handleAddImageClick}
            >
              <PhotoInput
                ref={photoref}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              ></PhotoInput>
              <PlusLogo />
              <UploadContainer>Upload photos</UploadContainer>
            </PhotoAddContainer>
}
          </PhotoContainer2>
        </MainPhotoContainer>
      </Content1>
      <Content1>
        <SecondData>Your video URL</SecondData>
        <Forminput
          width="100%"
          type="string"
          label="Video URL"
          placeholder=" Add your video url"
          value={FormInfo2.VideoUrl.content}
          name="VideoUrl"
          valid={FormInfo2.VideoUrl.valid}
          ChangeFunc={(type, value) => {
            SetFormInfo2({ type, value });
          }}
        ></Forminput>
      </Content1>
      <Division />
      <Button  Loading={false} SubmitFunc={CheckValidity} BackFunc={props.LastFunc} Name="Continue"></Button>
    </MainContainer>
  );
}

export default FormCantainer2;
