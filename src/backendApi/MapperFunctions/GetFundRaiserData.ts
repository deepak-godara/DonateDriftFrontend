import { RequiredFormat } from "../../component/DonationCard/main";
import { DonationDataType } from "../../component/DonateMainPage/main";
import { ProptypesDonationCard } from "../../component/DonationCard/main";
export async function GetFundraisersDataMapped(
  Data: any,
  Amount:number,
  index:number,
): Promise<ProptypesDonationCard> {
    console.log(Data)
  return  {
    Data:{
      Category: Data.Category,
      Country: Data.Country,
      id: Data.FundRaiserId,
      MainCover: Data.CoverPhoto,
      FundraiserTitle: Data.FundraiserTitle,
      NumberofDonors: Data.Donors.length,
      Story: Data.FundRaiserStory,
      Amount: Data.Amount,
      Percentage: Data.Amount / Data.RequiredAmount*100,
      Donation:Amount,
    index:index
    },
    
};
  
}