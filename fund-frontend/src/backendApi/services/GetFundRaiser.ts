import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { GetFundraisersMapped } from "../MapperFunctions/FundRaisermapper";
import { API } from "../API";
import { DonationDataType } from "../../component/DonateMainPage/main";
interface UserData {
  success: boolean;
  data?: DonationDataType;
}
export async function GetFundRaiserData(id:any): Promise<UserData> {
  const Url = urlFunctions.GetFundraiserdata(id);
  const res = await API.sendGetRequest(Url);
  if (res.success) {
    const MappedData = await GetFundraisersMapped(res.data);
    return { success: true, data: MappedData };
  }
  return { success: false };
}
