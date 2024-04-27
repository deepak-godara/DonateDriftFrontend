import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { GetFundRaiserData } from "./GetFundRaiser";
import { GetFundraisersDataMapped } from "../MapperFunctions/GetFundRaiserData";
import { GetFundraisersMapped } from "../MapperFunctions/FundRaisermapper";
import { API } from "../API";
import { ProptypesDonationCard } from "../../component/DonationCard/main";
import { UserDonation } from "../../component/UserDonation/main";
import { DonationDataType } from "../../component/DonateMainPage/main";

interface UserData {
  success: boolean;
  data?: ProptypesDonationCard[]; // Corrected data type
}

export async function GetDonorHistory(id: any): Promise<UserData> {
  const Url = urlFunctions.GetDonorHistory(id);
  const res = await API.sendGetRequest(Url,true);
  if (res.success) {
    let Data: ProptypesDonationCard[] = [];
    console.log(res.data)
    const l1=res.data.length;
    for (let i = 0; i <l1; i++) {
        console.log("yes")
        const data1=await GetFundRaiserData(res.data[i].fundraiserId);
        console.log(data1)
      const data = await GetFundraisersDataMapped(data1.data,res.data[i].amount,i);

        Data.push(data);
    }
    return { success: true, data: Data }; // Returning the correct data
  }
  return { success: false };
}
