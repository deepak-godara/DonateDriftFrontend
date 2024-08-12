import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { API } from "../API";
interface UserData {
  success: boolean;
  data?: any;
}
export async function OperationFund(
 FundRaiserId:number,
 Status:number
): Promise<UserData> {
  const Url = urlFunctions.ApproveFundRaiser(FundRaiserId,Status);
  console.log(Url)
  const res = await API.sendPutRequest(Url, {
  },true);
  
  if (res.success) {
    // Cookies.set("token", res.data.jwt);
    return { success: true, data: res.data };
  }
  return { success: true };
}
