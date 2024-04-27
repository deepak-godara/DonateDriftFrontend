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
    Donors: Data.donors.map((item:any,index:number)=>{
      const parsedDate=new Date(item.donatedAt)
      return{
        Name:item.name,
        UserId:item.userId,
        Amount:item.amount,
        comment:item.comment,
        Date:parsedDate.toISOString().split('T')[0]
      }
    }),
    FundRaiserStory: Data.description,
    Amount: Data.raisedAmount,
    RequiredAmount:Data.requiredAmount,
    Percentage: Data.raisedAmount / Data.requiredAmount,
  };
}
