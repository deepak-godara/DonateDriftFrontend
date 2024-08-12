import React, { useReducer, useRef,useState } from "react";
import styled from "styled-components";
import draftToHtml from "draftjs-to-html";
import { CiCirclePlus } from "react-icons/ci";
import Loader from "react-js-loader";
import { UpdateFundraisal } from "../../backendApi/services/UpdatesFundrasier";
import Button from "../../../src/FunctionalCompos/Button";
import Editors from "../FundRaisalForm/FormContainer/FormPart2/Editor";
import { convertToRaw, EditorState } from "draft-js";
import { useParams } from "react-router-dom";
const MainContainer = styled.div`
  width: 80%;
  margin:2rem auto;
`;
interface widthprops {
  $displays: boolean;
}
const PhotoAddContainer = styled.button<widthprops>`
  width: ${(props) => (props.$displays ? "100%" : "0%")};
  display: ${(props) => (props.$displays ? "flex" : "none")};
  border: 1px solid #ccc;
  background: none;
  z-index: 200;
  border-radius: 8px;
//   display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height:361px;
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
const PhotoInput = styled.input`
  display: none;
`;
const FirstData = styled.div`
  color: #2f435a;
  font-size: 32px;
  width:100%;
  text-align:center;
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
const SideContainer=styled.div`
width:100px;
color: #2f435a;
font-size: 32px;
line-height: 1.5;
font-weight: 300;

`
const MainButton = styled.button`
margin: 0, auto;
margin-bottom: 2rem;
width: 50%;
text-align: center;
color: #fff;
background: #4a90e2;
height: 60px;
font-size: 18px;
border-radius: 8px;
box-sizing: border-box;
font-weight: 700;
line-height: 1;
cursor: pointer;
transition: border-color 0.4s, background-color 0.4s;
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
border: 1px solid transparent;

&:hover {
  border-color: #2d6db9;
  background: #2d6db9;
}
`;
const PlusLogo = styled(CiCirclePlus)`
  height: 35px;
  width: 35px;
  // border
  font-weight: 400;
  // color: rgba(121,135,152,.55);
  font-size: 28px;
`;
const MainPhotoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 1.5rem;
`;
const PhotoContainer1 = styled.img<widthprops>`
  height: 316px;
  width: 100%;
  border-radius: 12px;
  display: ${(props) => (props.$displays ? "block" : "none")};
`;
const Content1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top:2rem;
  row-gap: 0.8rem;
`;
const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const LoaderDiv=styled.div`
position:absolute;
top:0.5rem;
`
const MainContainer2=styled.div`
`
const ReducerTypes = {
  FundraiserStory: { content: "", valid: true }, // Initial HTML content
  UseMainCover: { content: "", valid: true },
  MainCoverPhoto: { content: undefined, valid: true },
};

export interface Types {
  FundraiserStory: { content: string; valid: boolean }; // Use dangerouslySetInnerHTML format
  MainCoverPhoto: { content: File | undefined; valid: boolean };
  UseMainCover: { content: string; valid: boolean };
}

const FormInformationReducer = (
  state: Types,
  action: {
    type: string;
    value: string | HTMLElement | number | File | undefined;
    valid?: boolean;
  }
) => {
  const newState = { ...state };
  if(action.valid!==undefined)
    {
       if(action.type==="FundRaiserStory")
       newState.FundraiserStory.valid=action.valid;
       else if(action.type==="MainCover")
        {

       newState.MainCoverPhoto.valid=action.valid;
       newState.UseMainCover.valid=action.valid
        }
    }
    else
    {
  if (action.type === "AddPhoto" && action.value instanceof File) {
    newState.MainCoverPhoto.content = action.value;
    newState.MainCoverPhoto.valid=true;
  }
  if (action.type === "AddPhotoData" && typeof action.value === "string")
    {
    newState.UseMainCover.content = action.value;
    newState.UseMainCover.valid = true;
    }
  if (action.type === "description" && typeof action.value === "string")
    {
    newState.FundraiserStory.content = action.value;
    newState.FundraiserStory.valid=true;
    }
  if (action.type === "delete")
    { newState.MainCoverPhoto.content = undefined;
  newState.UseMainCover.content = "";
    }
}
  console.log(newState)
  return newState;
};
interface proptypes {
  LastFunc: (change: number) => void;
  NextFunc: (change: number) => void;
  FormFunc: (Data: Types) => void;
  Subunc: () => void;
  state: number;
}
function Update() {
    const param=useParams();
  const photoref = useRef<HTMLInputElement>(null);
  const [Loading, SetLoading] = useState<boolean>(false);
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
        if (typeof reader.result === "string") {
          SetFormInfo2({ type: "AddPhoto", value: Image });
          SetFormInfo2({ type: "AddPhotoData", value: reader.result });
        }
      };
    }
  };
  const handleEditorChange = (content: EditorState) => {
    SetFormInfo2({
      type: "description",
      value: draftToHtml(convertToRaw(content.getCurrentContent())),
    });
    console.log(FormInfo2.FundraiserStory);
  };
  const CheckValidity=async()=>{
    let count=0;
    if(FormInfo2.MainCoverPhoto.content===undefined)
    {
      SetFormInfo2({valid:false,type:"MainCover",value:undefined})
      count++;
    }
    if(FormInfo2.FundraiserStory.content==="")
        {
          SetFormInfo2({valid:false,type:"FundRaiserStory",value:undefined})
          count++;
        }
    if(count===0&&FormInfo2.MainCoverPhoto.content!==undefined&&param.id!==undefined)
    {
SetLoading(true);
        const data=await UpdateFundraisal(FormInfo2.FundraiserStory.content,FormInfo2.MainCoverPhoto.content,param.id)
        if(data.success===true)
            {
                
            }
  }
  else{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  }
}
  return (
    <MainContainer>
      <FirstData> Add Update to Your Fundraiser </FirstData>
      <Content1>
        <SecondData>Your fundraiser story</SecondData>
        <Editors handleEditorChange={handleEditorChange} />
      </Content1>
      <Content1>
        <SecondData>Upload fundraiser photos</SecondData>
        <MainPhotoContainer>
          <PhotoContainer1
            $displays={FormInfo2.MainCoverPhoto.content !== undefined}
            src={FormInfo2.UseMainCover.content}
          ></PhotoContainer1>

          <PhotoAddContainer
            $displays={FormInfo2.MainCoverPhoto.content === undefined}
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
          </PhotoAddContainer>
        </MainPhotoContainer>
      </Content1>
      <Content1>
      <SubmitContainer>
          <MainButton onClick={CheckValidity}>
            {Loading && (
                <LoaderDiv>
              <Loader
                type="spinner-cub"
                color="white"
                style={{ position:"absolute"}}
               
                bottom="0.2rem"
                bgColor="white"
                // title={"spinner-cub"}
                size={50}
              ></Loader>
              </LoaderDiv>
            )}
            {!Loading && "Submit"}
          </MainButton>
        </SubmitContainer>
      </Content1>
    </MainContainer>
  );
}

export default Update;
