import { urlFunctions } from "../function/createUrl";
import { API } from "../API";
// import Cookies from "js-cookie";
import { InitialUserType } from "../../Store/AuthClientProvider";
interface UserData {
  success: boolean;
  data: InitialUserType|null;
}
export async function VerifyUser(token: string): Promise<UserData> {
  const Url = urlFunctions.VerifyUserUri();
  const res = await API.sendGetRequest(Url);
  if (res.success)
  { 
    // Cookies.set("token",res.data.token)
    return { success: res.success, data: res.data };
}

  return { success: false,data:null };
}
