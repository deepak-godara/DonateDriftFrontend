import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { API } from "../API";
interface UserData {
  success: boolean;
  data?: any;
}
export async function FetchFundRaisers(
): Promise<UserData> {
  const Url = urlFunctions.GetFundraisers();
  console.log(Url);
  const res = await API.sendGetRequest(Url,
   );
  if (res.success) {
    return { success: true, data: res.data };
  }
  return { success: true };
}
