import { ProptypesDonationCard } from "../../component/DonationCard/main";
import { DonationDataType } from "../../component/DonateMainPage/main";
export async function GetFundraisersMapped(
  Data: any
): Promise<DonationDataType> {
  return {
    CreaterName: Data.lastName,
    City: Data.city,
    Category: Data.category,
    Country: Data.country,
    FundRaiserId: Data.id,
    FundRaiserPhotos: Data.attachment.map((item: any, index: number) => {
      return item.url;
    }),
    CoverPhoto: Data.coverAttachment.url1,
    FundraiserTitle: Data.title,
    Donors: Data.Donors,
    FundRaiserStory: Data.description,
    Amount: Data.raisedAmount,
    Percentage: Data.raisedAmount / Data.requiredAmount,
  };
}
