import { RequiredFormat } from "../../component/DonationCard/main";
import { InitialUserType } from "../../Store/AuthClientProvider";
export async function GetUserDataMapped(
  Data: any
): Promise<InitialUserType> {
  return {
    isAuth: true,
    UserId: Data.id,
    UserEmail: Data.email,
    UserName: Data.name,
    UserPhoto: Data.profilePicUrl,
    UserCity: Data.city,
    UserCountry: Data.country,
  };
}
