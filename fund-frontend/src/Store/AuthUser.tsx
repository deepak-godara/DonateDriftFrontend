import React from "react";
import { InitialUserType } from "./AuthClientProvider";
const UserContext=React.createContext<InitialUserType>({
isAuth : false,
UserAbout:"",
UserId:null,
UserFundRaisers:[],
UserEmail : "",
UserName : "",
UserPhoto: "",
UserCity : "",
UserCountry:""
})
export default UserContext;