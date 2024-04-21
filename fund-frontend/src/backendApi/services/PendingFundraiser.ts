import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { GetFundraisersMapped } from "../MapperFunctions/FundRaisers";
import { API } from "../API";
import { RequiredFormat } from "../../component/DonationCard/main";
interface UserData {
  success: boolean;
  data?: RequiredFormat[];
}
export async function PendingFundRaisers(
): Promise<UserData> {
  const Url = urlFunctions.PendingFundRaisers();
  const res = await API.sendGetRequest(Url,true);
  if (res.success) {
    console.log(res)
    const MappedData = await GetFundraisersMapped(res.data);
    return { success: true, data: MappedData };
  }
  return { success: false };
}