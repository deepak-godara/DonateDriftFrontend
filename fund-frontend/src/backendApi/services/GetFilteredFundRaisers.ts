import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { GetFundraisersMapped } from "../MapperFunctions/FundRaisers";
import { API } from "../API";
import { RequiredFormat } from "../../component/DonationCard/main";
interface UserData {
  success: boolean;
  data?: RequiredFormat[];
}
export async function FilteredFundRaisers(
  category: string,
  city: string,
  country: string,
  pagesize: number,
  pagenumber: number
): Promise<UserData> {
  const Url = urlFunctions.GetFilteredFundraisers(
    category,
    pagesize,
    pagenumber,
    city,
    country
  );
  const res = await API.sendGetRequest(Url);
  if (res.success) {
    const MappedData = await GetFundraisersMapped(res.data.content);
    return { success: true, data: MappedData };
  }
  return { success: false };
}
