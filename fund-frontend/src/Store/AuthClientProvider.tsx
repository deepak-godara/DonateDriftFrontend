import React, { useEffect, useReducer, useState } from "react";
import UserContext from "./AuthUser";
import Cookies from "js-cookie";
import { RequiredFormat } from "../component/DonationCard/main";
import { GetUserData } from "../backendApi/services/GetUserData";
import UserFundrasiers from "../component/UserFundrasiers";
import LogOut from "../component/NavBarComponent/LogOut";
// import { VerifyUser } from "../backendApi/services/VerifyUser";
const InitialState = {
  isAuth: false,
  UserId:null,
  UserRole:"",
  UserAbout:null,
  UserEmail: null,
  UserFundRaisers:[],
  UserName: null,
  UserPhoto: null,
  UserCity: null,
  UserCountry: null,
};

export interface InitialUserType {
  isAuth: boolean;
  UserId:number|null;
  UserAbout:string|null;
  UserRole:string,
  UserFundRaisers:Array<RequiredFormat 
  
 >;
  UserEmail: string | null;
  UserName: string | null;
  UserPhoto: string | null;
  UserCity: string | null;
  UserCountry: string | null;
  LogOutUser?: () => void;
  LoginUser?:(Data:InitialUserType)=>void
}

const AddUserReducer = (
  state: InitialUserType,
  action: { type: string; payload: InitialUserType | null }
): InitialUserType => {
  const newState = { ...state };
  if (action.type === "login" && action.payload) {
    newState.isAuth = true;
    newState.UserRole=action.payload.UserRole
    newState.UserId = action.payload.UserId;
    newState.UserAbout=action.payload.UserAbout;
    newState.UserEmail = action.payload.UserEmail;
    newState.UserName = action.payload.UserName;
    newState.UserPhoto = action.payload.UserPhoto;
    newState.UserCity = action.payload.UserCity;
    newState.UserFundRaisers=action.payload.UserFundRaisers
    newState.UserCountry = action.payload.UserCountry;
  } else if (action.type === "logout") {
    newState.isAuth = false;
    newState.UserId = null;
    newState.UserAbout=null;
    newState.UserRole="";
    newState.UserFundRaisers=[];
    newState.UserEmail = null;
    newState.UserName = null;
    newState.UserPhoto = null;
    newState.UserCity = null;
    newState.UserCountry = null;
  }
  return newState;
};

function AuthUserProvider(props: any) {
  const [UserData, SetUserData] = useReducer(
    AddUserReducer,
    InitialState as InitialUserType  // Adjust type here
  );
  const [loading, SetLoading] = useState(false);

  const LoginUser = (event: InitialUserType) => {
    SetUserData({ type: "login", payload: event });
  };

   const LogOutUser = () => {
    SetUserData({ type: "logout", payload: null });
  };

  const UserCtx = {
    isAuth: UserData.isAuth,
    UserId:UserData.UserId,
    UserRole:UserData.UserRole,
    UserAbout:UserData.UserAbout,
    UserFundRaisers:UserData.UserFundRaisers,
    UserName: UserData.UserName,
    UserEmail: UserData.UserEmail,
    UserPhoto: UserData.UserPhoto,
    UserCity: UserData.UserCity,
    UserCountry: UserData.UserCountry,
    LoginUser: LoginUser,
    LogOutUser: LogOutUser,
  };

  async function getLoginStatus() {
    const token = Cookies.get("token");
    if (!token) {
      SetLoading(true);
    } else {
      let chunk = token.split(/\./);
      const header = chunk[0];
      const payload = chunk[1];
      const res = await GetUserData(header, payload);
      if (res.success) {
        SetUserData({ type: "login", payload: res.data });
        
        setTimeout(() => {
          SetLoading(true);
          console.log(UserData)
        }, 200);
      }
    }
  }

  useEffect(() => {
    getLoginStatus();
  }, []);

  if (loading)
    return (
      <UserContext.Provider value={UserCtx}>
        {props.children}
      </UserContext.Provider>
    );
    else
    return <></>
}

export default AuthUserProvider;
