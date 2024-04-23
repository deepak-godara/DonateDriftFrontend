import React, {
  useReducer,
  useRef,
  useState,
  useEffect,
  useContext,
  // useNavigate,/
} from "react";
import "./EditorProfile.css"
import Forminput from "../../FunctionalCompos/input";
import UserContext from "../../Store/AuthUser";
import Select from "../../FunctionalCompos/Select";
import styled from "styled-components";
import Loader from "react-js-loader";
import { UpdateProfile } from "../../backendApi/services/EditProfile";
import { CiCamera } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Inp = styled.input`
  // display : none;
`;

const StyledCiCamera = styled(CiCamera)`
  height: 1.5rem;
  width: 2rem;
  transition: 0.4s;
  color: #c9c7c7;
`;

const InsideText = styled.div`
  font-weight: 500;
  transition: 0.4s;
  width: 100%;
  font-size: 16px;
  text-align: center;
  line-height: 170%;
  display: block;
  cursor: pointer;
  color: #c9c7c7;
  margin-top: 0.3rem;
`;

const PhotoInput = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  align-items: center;
  width: 8rem;
  height: 8rem;
  padding-top: 37px;
  cursor: pointer;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 28px;
  border: 1px solid #c9c7c7;
  &:hover {
    border-color: #4a90e2;
    background-color: #e1eaf4;
  }
  &:hover ${InsideText} {
    color: #4a90e2;
  }
  &:hover ${StyledCiCamera} {
    color: #4a90e2;
  }
`;

const HeadingContainer = styled.div`
  font-weight: 300;
  font-size: 40px;
  line-height: 150%;
  text-align: center;
  padding: 50px 0 30px;
  color: #2f435a;
`;

const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DataContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DataHeading = styled.div`
  width: 100%;
  color: #6ec052;
  font-size: 28px;
  margin-bottom: 28px;
  font-weight: 700;
  line-height: 1.5;
`;
const DPDiv = styled.div`
  width: 45%;
  margin-top: 2rem;
`;
const LineDiv = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(200, 190, 190, 0.472);
  margin: 2rem 0rem;
`;
const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const LoaderDiv=styled.div`
position:absolute;
top:0.4rem;
`
const ErrorMessage = styled.p`
  margin: 0;
  width: 30%;
  text-align: center;
  color: #f92f06;
  background: #f4c8c0;
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
  border: 1px solid #f92f06;
`;
const Content1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.8rem;
`;
const Content2 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  row-gap: 0.8rem;
`;
const SubContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 0.5rem;
`;
const SubmitButton = styled.div`
  margin: 0;
  margin-bottom: 2rem;
  width: calc(50% - 14px);
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
const InputLabel = styled.div`
  color: #2f435a;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SmallLabel = styled.div`
  color: #798798;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.7;
`;
interface widthprops {
  $displays: boolean;
}
const PhotoContainer1 = styled.img<widthprops>`
  height: 200px;
  width: 47%;
  border-radius: 12px;
  display: ${(props) => (props.$displays ? "block" : "none")};
`;
const ReducerTypes = {
  UserName: { content: "", valid: true },
  ProfilePhoto: { content: null, valid: true },
  AboutMe: { content: "", valid: true },
  Password: { content: "", valid: true },
  ConfirmPassword: { content: "", valid: true },
  City: { content: "", valid: true },
  Country: { content: "", valid: true },
  Images: { content: "", valid: true },
};

export interface ProfileType {
  UserName: { content: string; valid: boolean };
  Country: { content: string; valid: boolean };
  City: { content: string; valid: boolean };
  Password: { content: string; valid: boolean };
  AboutMe: { content: string; valid: boolean };
  ConfirmPassword: { content: string; valid: boolean };
  ProfilePhoto: { content: File | null; valid: boolean };
  Images: { content: string; valid: boolean };
}

const FormInformationReducer = (
  state: ProfileType,
  action: {
    type: string | File;
    value: string | File | null;
    valid?: boolean;
    value2?: string;
  }
) => {
  const NewState = { ...state };
  if (action.valid !== undefined) {
    if (action.type === "UserName") NewState.UserName.valid = action.valid;
    else if (action.type === "Country") NewState.Country.valid = action.valid;
    else if (action.type === "City") NewState.City.valid = action.valid;
    else if (action.type === "Password") NewState.Password.valid = action.valid;
    else if (action.type === "AboutMe") NewState.AboutMe.valid = action.valid;
    else if (action.type === "ProfilePhoto")
      NewState.ProfilePhoto.valid = action.valid;
    else if (action.type === "ConfirmPassword")
      NewState.ConfirmPassword.valid = false;
  } else {
    if (action.type === "UserName" && typeof action.value === "string") {
      NewState.UserName.content = action.value;
      NewState.UserName.valid = true;
    } else if (action.type === "Country" && typeof action.value === "string") {
      NewState.Country.content = action.value;
      NewState.Country.valid = true;
    } else if (action.type === "City" && typeof action.value === "string") {
      NewState.City.content = action.value;
      NewState.City.valid = true;
    } else if (action.type === "Password" && typeof action.value === "string") {
      NewState.Password.content = action.value;
      NewState.Password.valid = true;
    } else if (action.type === "AboutMe" && typeof action.value === "string") {
      NewState.AboutMe.content = action.value;
      NewState.AboutMe.valid = true;
    } else if (
      (action.type === "ProfilePhoto" && action.value instanceof File) ||
      action.value === null
    ) {
      NewState.ProfilePhoto.content = action.value;
      NewState.ProfilePhoto.valid = true;
      if (action.value2) NewState.Images.content = action.value2;
    } else if (
      action.type === "ConfirmPassword" &&
      typeof action.value == "string"
    ) {
      NewState.ConfirmPassword.content = action.value;
      NewState.ConfirmPassword.valid = true;
    }
  }
  return NewState;
};

function EditFormInput() {
  const Country = ["India", "Srilanka", "Pakistan"];
  const photoref = useRef<HTMLInputElement>(null);
  const Navigate=useNavigate()
  const Usercontext = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [FormInfo, SetFormInfo] = useReducer(
    FormInformationReducer,
    ReducerTypes as ProfileType
  );
  const [Loading, SetLoading] = useState<boolean>(false);
  useEffect(() => {
    SetFormInfo({ type: "UserName", value: Usercontext.UserName });
    SetFormInfo({ type: "AboutMe", value: Usercontext.UserAbout?Usercontext.UserAbout:"" });
    SetFormInfo({ type: "Password", value:"" });
    SetFormInfo({ type: "City", value: Usercontext.UserCity?Usercontext.UserCity:" " });
    SetFormInfo({ type: "Country", value:Usercontext.UserCountry?Usercontext.UserCountry:" "  });
    SetFormInfo({ type: "ProfilePhoto", value: Usercontext.UserPhoto?Usercontext.UserPhoto:null });

    SetFormInfo({ type: "ConfirmPassword", value: "" });
  }, []);
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
          SetFormInfo({
            type: "ProfilePhoto",
            value: Image,
            value2: reader.result,
          });
      };
    }
  };

  const handelSubmit = async () => {
    let count = 0;
    if (FormInfo.UserName.content === "") {
      SetFormInfo({ type: "UserName", valid: false, value: "" });
      count++;
    }
    if (FormInfo.AboutMe.content === "") {
      SetFormInfo({ type: "AboutMe", valid: false, value: "" });
      count++;
    }
    if (FormInfo.Password.content === "") {
      SetFormInfo({ type: "Password", valid: false, value: "" });
      count++;
    }
    if (FormInfo.City.content === "") {
      SetFormInfo({ type: "City", valid: false, value: "" });
      count++;
    }
    if (FormInfo.Country.content === "") {
      SetFormInfo({ type: "Country", valid: false, value: "" });
      count++;
    }
    if (FormInfo.ProfilePhoto.content === null) {
      SetFormInfo({ type: "ProfilePhoto", valid: false, value: "" });
      count++;
    }
    if (
      FormInfo.ConfirmPassword.content === "" ||
      FormInfo.ConfirmPassword.content !== FormInfo.Password.content
    ) {
      SetFormInfo({ type: "ConfirmPassword", valid: false, value: "" });
      count++;
    }
    if (count === 0) {
      if (Usercontext.UserId) {
        SetLoading(true);
        const data = await UpdateProfile(FormInfo, Usercontext.UserId);
        if (data.success) {
          if(Usercontext.LoginUser)
          Usercontext.LoginUser(data.data);
          SetLoading(false);
          Navigate("/")
        }
        SetLoading(false);
      }
    } else {
      setErrorMessage("Please fill in all the required fields");
    }
  };

  return (
    <EditContainer>
      <HeadingContainer>Edit User Profile</HeadingContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <DataContainer>
        <Content1>
          <DataHeading>
            <p>Personal details</p>
          </DataHeading>
          <SubContent>
            <Forminput
              label="Your Name"
              width="47%"
              type="string"
              placeholder="Enter your name"
              name="UserName"
              value={FormInfo.UserName.content}
              valid={FormInfo.UserName.valid}
              ChangeFunc={(type, value) => {
                SetFormInfo({ type, value });
              }}
            ></Forminput>
            <Forminput
              label="About Me"
              width="47%"
              type="string"
              placeholder="Enter details"
              name="AboutMe"
              value={FormInfo.AboutMe.content}
              valid={FormInfo.AboutMe.valid}
              ChangeFunc={(type, value) => {
                SetFormInfo({ type, value });
              }}
            ></Forminput>
          </SubContent>
        </Content1>

        <Content2>
          <DPDiv>
            <InputLabel>
              <p>Upload your Profile Picture</p>
            </InputLabel>
            <SmallLabel>
              <p>This will we shown next to your name</p>
            </SmallLabel>
            <PhotoInput onClick={handleAddImageClick}>
              <StyledCiCamera />

              <InsideText>
                <p>Upload Photo</p>
              </InsideText>
            </PhotoInput>
          </DPDiv>
          <PhotoContainer1
            $displays={FormInfo.ProfilePhoto.content !== null}
            src={FormInfo.Images.content}
          ></PhotoContainer1>
        </Content2>
        <Content1>
          <SubContent>
            <Forminput
              label="Password"
              width="47%"
              type="string"
              placeholder="Enter New Password"
              name="Password"
              value={FormInfo.Password.content}
              valid={FormInfo.Password.valid}
              ChangeFunc={(type, value) => {
                SetFormInfo({ type, value });
              }}
            ></Forminput>
            <Forminput
              label="Password"
              width="47%"
              type="string"
              placeholder="Confirm Password"
              name="ConfirmPassword"
              value={FormInfo.ConfirmPassword.content}
              valid={FormInfo.ConfirmPassword.valid}
              ChangeFunc={(type, value) => {
                SetFormInfo({ type, value });
              }}
            ></Forminput>
          </SubContent>
        </Content1>
        <Content1>
          <DataHeading>
            <p>Location</p>
          </DataHeading>

          <SubContent>
            <Forminput
              label="City"
              width="47%"
              type="string"
              placeholder="Enter City"
              name="City"
              value={FormInfo.City.content}
              valid={FormInfo.City.valid}
              ChangeFunc={(type, value) => {
                SetFormInfo({ type, value });
              }}
            ></Forminput>
            <Select
              item={Country}
              ChangeFunc={(type: string, value: string) => {
                SetFormInfo({ type: type, value: value });
              }}
              type="Country"
              width="47%"
              value={FormInfo.Country.content}
              valid={FormInfo.Country.valid}
              label="Country"
            ></Select>
          </SubContent>
        </Content1>
        <LineDiv></LineDiv>

        <SubmitContainer>
          <SubmitButton onClick={handelSubmit}>
            {Loading && (
                <LoaderDiv>
              <Loader
                type="spinner-cub"
                color="white"
                style={{ position:"absolute", top:"2.9rem"}}
               
                // top="2.9rem"
                bgColor="white"
                // title={"spinner-cub"}
                size={50}
              ></Loader>
              </LoaderDiv>
            )}
            {!Loading && "Submit"}
          </SubmitButton>
        </SubmitContainer>
      </DataContainer>
      <Inp
        ref={photoref}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        name="ProfilePhoto"
      ></Inp>
    </EditContainer>
  );
}

export default EditFormInput;
