import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { GetFundraisersMapped } from "../MapperFunctions/FundRaisers";
import { API } from "../API";
import { RequiredFormat } from "../../component/DonationCard/main";
interface UserData {
  success: boolean;
  data?: RequiredFormat[];
}
export async function FetchFundRaisers(
): Promise<UserData> {
  const Url = urlFunctions.GetFundraisers();
  console.log(Url);
  const res = await API.sendGetRequest(Url,
   );
  if (res.success) {
     const MappedData=await GetFundraisersMapped(res.data)
     console.log(MappedData)
    return { success: true, data:MappedData};
  }
  return { success: false };
}
