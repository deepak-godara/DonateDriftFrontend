import React,{useReducer, useRef, useState} from "react";
import Forminput from "../../FunctionalCompos/input";
import Select from "../../FunctionalCompos/Select";
import styled from "styled-components";
import { CiCamera } from "react-icons/ci";

const Inp = styled.input`
    // display : none;
`

const StyledCiCamera = styled(CiCamera)`
  height: 1.5rem;
  width: 2rem;
  transition : 0.4s;
  color: #C9C7C7;

`;

const InsideText = styled.div`
    font-weight : 500;
    transition : 0.4s;
    width : 100%;
    font-size : 16px;
    text-align : center;
    line-height : 170%;
    display : block;
    cursor : pointer;
    color : #C9C7C7;
    margin-top : .3rem;
`

const PhotoInput = styled.div`
    display : flex;
    flex-direction : column;
    transition : 0.4s;
    align-items : center;
    width: 8rem;
    height : 8rem;
    padding-top: 37px;
    cursor: pointer;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom : 28px;
    border : 1px solid #C9C7C7;
    &:hover {
        border-color : #4a90e2;
        background-color : #E1EAF4;
    }
    &:hover ${InsideText} {
        color : #4a90e2;
    }
    &:hover ${StyledCiCamera} {
        color :  #4a90e2;
    }
`;



const HeadingContainer = styled.div`
    font-weight : 300;
    font-size : 40px;
    line-height : 150%;
    text-align : center;
    padding : 50px 0 30px;
    color : #2f435a;
`

const EditContainer = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const DataContainer = styled.div`
    width : 30%;
    display : flex;
    flex-direction : column;
    align-items : center;
`
const DataHeading = styled.div`
    width : 100%;
    color : #6ec052;
    font-size : 28px;
    margin-bottom : 28px;
    font-weight : 700;
    line-height : 1.5
`

const NameDiv = styled.div`
    width : 100%;
    margin-bottom : 28px;
`

const DPDiv = styled.div`
    width : 100%;
`
const LineDiv = styled.div`
    width : 100%;
    height: 2px;
    background-color: rgba(200, 190, 190, 0.472);
    margin-bottom : 2rem;
`
const SubmitContainer = styled.div`
  width: 100%;
  display : flex;
  flex-directio : row;
  justify-content : space-around;
`;

const ErrorMessage = styled.p`
    margin : 0;
    width : 30%;
    text-align : center;
    color : #F92F06;
    background : #F4C8C0;
    height: 60px;
    font-size: 18px;
    border-radius: 8px;
    box-sizing: border-box;
    font-weight: 500;
    line-height: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border : 1px solid #F92F06 
`;

const SubmitButton = styled.div`
    margin : 0;
    width: calc(50% - 14px);
    text-align : center;
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
`
const InputLabel = styled.div`
    color: #2f435a;
    font-size: 18px;
    font-weight: 600;
    margin-bottom : 10px;
`

const SmallLabel = styled.div`
    color: #798798;
    margin-bottom : 16px;
    font-size: 12px;
    line-height: 1.7;
`
const ReducerTypes = {
    UserName : { content : "", valid : true},
    ProfilePhoto : {content : null, valid : true},
    AboutMe : {content : "", valid : true},
    Password : {content : "", valid : true},
    City : {content : "", valid : true},
    Country : {content : "", valid : true}
}

export interface Types1 {
    UserName: { content: string; valid: boolean };
    Country: { content: string; valid: boolean };
    City: { content: string; valid: boolean };
    Password: { content: string; valid: boolean };
    AboutMe: { content: string; valid: boolean };
    ProfilePhoto: { content: File | null ; valid: boolean };
}

const FormInformationReducer = (
    state: Types1,
    action: { type: string | File; value: string | File ,valid?:boolean }
  ) => {
    const NewState = { ...state };
    if(action.valid!==undefined)
    {
      if(action.type==="UserName")
      NewState.UserName.valid=action.valid;
      else if(action.type==="Country")
      NewState.Country.valid=action.valid;
      else if(action.type==="City")
      NewState.City.valid=action.valid;
      else if(action.type==="Password")
      NewState.Password.valid=action.valid;
      else if(action.type==="AboutMe")
      NewState.AboutMe.valid=action.valid;
      else if(action.type==="ProfilePhoto")
      NewState.ProfilePhoto.valid=action.valid;
    }
    else{
    if (action.type === "UserName" && typeof action.value === "string") {NewState.UserName.content = action.value; NewState.UserName.valid=true}
    else if (action.type === "Country"  && typeof action.value === "string") {NewState.Country.content = action.value; NewState.Country.valid=true}
    else if (action.type === "City"  && typeof action.value === "string") {NewState.City.content = action.value; NewState.City.valid=true}
    else if (action.type === "Password"  && typeof action.value === "string"){NewState.Password.content = action.value; NewState.Password.valid=true}
    else if (action.type === "AboutMe"   && typeof action.value === "string") {NewState.AboutMe.content = action.value; NewState.AboutMe.valid=true}
    else if (action.type === "ProfilePhoto" && action.value instanceof File) {NewState.ProfilePhoto.content = action.value; NewState.ProfilePhoto.valid=true}
    }
    return NewState;
  };


function EditFormInput(){
    const Country = ["India", "Srilanka", "Pakistan"];
    const photoref = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [FormInfo, SetFormInfo] = useReducer(
        FormInformationReducer,
        ReducerTypes as Types1
    );
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const Image = event.target.files?.[0];
        if (Image) {
          const reader = new FileReader();
          reader.readAsDataURL(Image);
          reader.onload = () => {
            if (typeof reader.result === "string")
                SetFormInfo({ type: "ProfilePhoto", value: Image});
          };
        }
      };

    const handelSubmit = () =>{
        if (FormInfo.UserName.content === "" || FormInfo.AboutMe.content === "" || FormInfo.City.content === "" || FormInfo.Country.content === "" || FormInfo.Password.content === ""){
            console.log("Please fill in all the required fields");
            setErrorMessage("Please fill in all the required fields");
            return;
        }

        console.log("Submitting form...", FormInfo);
        setErrorMessage("");
        
    }
    

    
    return (
        <EditContainer>
            <HeadingContainer>Edit User Profile</HeadingContainer>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <DataContainer>
                <DataHeading><p>Personal details</p></DataHeading>
                <NameDiv>
                    <Forminput 
                        label = "Your Name"
                        width = "50%"
                        type="string"
                        placeholder = "Enter your name"
                        name = "UserName"
                        value= {FormInfo.UserName.content}
                        valid = {FormInfo.UserName.valid}
                        ChangeFunc={(type, value) => {
                            SetFormInfo({ type, value });
                        }}
                    ></Forminput>
                </NameDiv>

                <DPDiv>
                    <InputLabel><p>Upload your Profile Picture</p></InputLabel>
                    <SmallLabel><p>This will we shown next to your name</p></SmallLabel>
                    <PhotoInput >
                        <StyledCiCamera />

                        <Inp 
                        ref={photoref}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        name = "ProfilePhoto"
                        ></Inp>

                        <InsideText><p>Upload Photo</p></InsideText>
                    </PhotoInput>
                </DPDiv>

                <NameDiv>
                    <Forminput 
                        label = "About Me"
                        width = "100%"
                        type="string"
                        placeholder = "Enter details"
                        name = "AboutMe"
                        value= {FormInfo.AboutMe.content}
                        valid = {FormInfo.AboutMe.valid}
                        ChangeFunc={(type, value) => {
                            SetFormInfo({ type, value });
                        }}
                    ></Forminput>
                </NameDiv>
                <NameDiv>
                    <Forminput 
                        label = "Password"
                        width = "50%"
                        type="string"
                        placeholder = "Enter New Password"
                        name = "Password"
                        value= {FormInfo.Password.content}
                        valid = {FormInfo.Password.valid}
                        ChangeFunc={(type, value) => {
                            SetFormInfo({ type, value });
                        }}
                    ></Forminput>
                </NameDiv>
                <DataHeading><p>Location</p></DataHeading>

                <NameDiv>
                    <Forminput 
                        label = "City"
                        width = "100%"
                        type="string"
                        placeholder = "Enter City"
                        name = "City"
                        value= {FormInfo.City.content}
                        valid = {FormInfo.City.valid}
                        ChangeFunc={(type, value) => {
                            SetFormInfo({ type, value });
                        }}
                    ></Forminput>
                </NameDiv>

                <NameDiv>
                    <Select 
                        item={Country}
                        ChangeFunc={(type: string, value: string) => {
                          SetFormInfo({ type: type, value: value });
                        }}
                        type="Country"
                        value={FormInfo.Country.content}
                        valid={FormInfo.Country.valid}
                        label="Country"
                    ></Select>
                </NameDiv>

                <LineDiv></LineDiv>

                <SubmitContainer>
                    <SubmitButton onClick={handelSubmit}>Submit</SubmitButton>
                </SubmitContainer>

            </DataContainer>
        </EditContainer>
    )
}

export default EditFormInput;