import React from "react";
import { InitialStateType } from "./AuthClientProvider";
const UserContext=React.createContext<InitialStateType>({
isAuth : false,
Name : "",
UserEmail : "",
UserName : "",
UserDob : "",
UserGender : "",
})
export default UserContext;