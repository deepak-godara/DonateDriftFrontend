import React, { useEffect, useReducer, useState } from "react";
import UserContext from "./AuthUser";
import Cookies from "js-cookie";
import { VerifyUser } from "../backendApi/services/VerifyUser";
const InitialState = {
  isAuth: false,
  Name: undefined,
  UserEmail: undefined,
  UserName: undefined,
  UserGender: undefined,
  UserDob: undefined,
};

export interface InitialStateType {
  isAuth: boolean;
  Name: string | undefined;
  UserEmail: string | undefined;
  UserName: string | undefined;
  UserGender?: string | undefined;
  UserDob?: string | undefined;
}

const AddUserReducer = (
  state: InitialStateType,
  action: { type: string; payload: InitialStateType | null }
): InitialStateType => {
  const newState = { ...state };
  if (action.type === "login" && action.payload) {
    newState.isAuth = true;
    newState.Name = action.payload.Name;
    newState.UserEmail = action.payload.UserEmail;
    newState.UserName = action.payload.UserName;
    if (action.payload.UserDob) newState.UserDob = action.payload.UserDob;
    if (action.payload.UserGender)
      newState.UserGender = action.payload.UserGender;
  } else if (action.type === "logout") {
    newState.isAuth = false;
    newState.Name = undefined;
    newState.UserEmail = undefined;
    newState.UserName = undefined;
    newState.UserDob = undefined;
    newState.UserGender = undefined;
  }
  return newState;
};

function AuthUserProvider(props: any) {
  const [UserData, SetUserData] = useReducer(
    AddUserReducer,
    InitialState as InitialStateType
  );
  const [loading, SetLoading] = useState(false);

  const LoginUser = (event: InitialStateType) => {
    SetUserData({ type: "login", payload: event });
  };

  const LogOutUser = () => {
    SetUserData({ type: "logout", payload: null });
  };

  const UserCtx = {
    isAuth: UserData.isAuth,
    Name: UserData.Name,
    UserName: UserData.UserName,
    UserEmail: UserData.UserEmail,
    UserDob: UserData.UserDob,
    UserGender: UserData.UserGender,
    LoginUser: LoginUser,
    LogOutUser: LogOutUser,
  };

  async function getLoginStatus() {
    const token = Cookies.get("token");
    if (!token) {
      SetLoading(true);
    } else {
      const res = await VerifyUser(token);
      if(res.success)
      {
        SetUserData({type:"login",payload:res.data});
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
}

export default AuthUserProvider;
