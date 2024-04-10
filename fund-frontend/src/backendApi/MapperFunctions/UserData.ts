import { RequiredFormat } from "../../component/DonationCard/main";
import { InitialUserType } from "../../Store/AuthClientProvider";
import { GetFundraisersMapped } from "./FundRaisers";
export async function GetUserDataMapped(
  Data: any
): Promise<InitialUserType> {
  const Datas=await GetFundraisersMapped(Data.fundraisers);
  return {
    isAuth: true,
    UserAbout:Data.description,
    UserId: Data.id,
    UserFundRaisers:Datas,
    UserEmail: Data.email,
    UserName: Data.name,
    UserPhoto: Data.profilePicUrl.url5,
    UserCity: Data.city,
    UserCountry: Data.country,
  };
}
