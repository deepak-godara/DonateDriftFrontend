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
  console.log(Email + Password )
  const Url = urlFunctions.signinUrl();
  console.log(Url);
  const res = await API.sendPostRequest(Url, {
    email:Email,
    password:Password,
  });
  
  if (res.success) {
    console.log(res);
    Cookies.set("token", res.data.jwt);
    return { success: true, data: res.data };
  }
  return { success: true };
}
