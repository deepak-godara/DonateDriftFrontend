import React, { useEffect, useReducer, useState } from "react";
import UserContext from "./AuthUser";
import Cookies from "js-cookie";
import { GetUserData } from "../backendApi/services/GetUserData";
// import { VerifyUser } from "../backendApi/services/VerifyUser";
const InitialState = {
  isAuth: false,
  UserId:null,
  UserEmail: null,
  UserName: null,
  UserPhoto: null,
  UserCity: null,
  UserCountry: null,
};

export interface InitialUserType {
  isAuth: boolean;
  UserId:number|null;
  UserEmail: string | null;
  UserName: string | null;
  UserPhoto: string | null;
  UserCity: string | null;
  UserCountry: string | null;
}

const AddUserReducer = (
  state: InitialUserType,
  action: { type: string; payload: InitialUserType | null }
): InitialUserType => {
  const newState = { ...state };
  if (action.type === "login" && action.payload) {
    newState.isAuth = true;
    newState.UserId = action.payload.UserId;
    newState.UserEmail = action.payload.UserEmail;
    newState.UserName = action.payload.UserName;
    newState.UserPhoto = action.payload.UserPhoto;
    newState.UserCity = action.payload.UserCity;
    newState.UserCountry = action.payload.UserCountry;
  } else if (action.type === "logout") {
    newState.isAuth = false;
    newState.UserId = null;
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
    InitialState as InitialUserType
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
    console.log(token)
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
