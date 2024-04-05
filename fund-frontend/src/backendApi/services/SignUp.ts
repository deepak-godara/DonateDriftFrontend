import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { API } from "../API";
interface UserData{
    success:boolean
}
export async function SignUps(
    Name:string,
    Email: string,
    Password: string
  ): Promise<UserData> {
    // console.log(Email + Password )
    const Url = urlFunctions.signupUri();
    // console.log(Url);
    const res = await API.sendPostRequest(Url, {
      name:Name,email:Email,password:Password
    });
    if (res.success) {
      console.log(res)
      Cookies.set("token", res.data.jwt);
      return { success: true};
    }
    return { success: false };
  }