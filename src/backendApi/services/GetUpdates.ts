import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { GetFundraisersMapped } from "../MapperFunctions/FundRaisermapper";
import { GetUpdatesMapped } from "../MapperFunctions/GetUpdatesMapped";
import { API } from "../API";
import { UpdateTypes } from "../../component/DonateMainPage/DonateData2/LeftContainer/Updates/main";
import { DonationDataType } from "../../component/DonateMainPage/main";
interface UserData {
  success: boolean;
  data?: UpdateTypes[];
}
export async function GetUpdates(id:string): Promise<UserData> {
  const Url = urlFunctions.GetUpdates(id);
  const res = await API.sendGetRequest(Url);
  if (res.success) {
    console.log(res.data)
    const MappedData = await GetUpdatesMapped(res.data);
    return { success: true, data: MappedData };
  }
  return { success: false };
}
