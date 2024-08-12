import { RequiredFormat } from "../../component/DonationCard/main";
import { UserDonation } from "../../component/UserDonation/main";
export async function GetFundraisersMapped(
  Data: any
): Promise<UserDonation[]> {
  return Data.map
}
