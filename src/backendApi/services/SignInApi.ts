import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { API } from "../API";
interface UserData {
  success: boolean;
  data?: any;
}
export async function SignInwithPassword(
  Email: string,
  Password: string
): Promise<UserData> {
  const Url = urlFunctions.signinUrl();
  const res = await API.sendPostRequest(Url, {
    email:Email,
    password:Password,
  });
  
  if (res.success) {
    Cookies.set("token", res.data.jwt);
    return { success: true, data: res.data };
  }
  return { success: true };
}
