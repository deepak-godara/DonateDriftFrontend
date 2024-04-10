import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { GetUserDataMapped } from "../MapperFunctions/UserData";
import { API } from "../API";
interface UserData {
  success: boolean;
  data?: any;
}
export async function GetUserData(
  header: string,
  payload: string
): Promise<UserData> {
  const Url = urlFunctions.GetUserDataUrl();
  console.log(Url);
  const res = await API.sendPostRequest(Url, {
    header:header,
    payload:payload,
  },true);
  
  if (res.success) {

    const data=await GetUserDataMapped(res.data);
    return { success: true, data: data };
  }
  return { success: true };
}
