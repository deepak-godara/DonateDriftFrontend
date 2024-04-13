import { RequiredFormat } from "../../component/DonationCard/main";
export async function GetFundraisersMapped(
  Data: any
): Promise<RequiredFormat[]> {
  if (Data === undefined || Data === null) return [];
  return Data.map((item: any, index: number) => {
    return {
      Category: item.category,
      Country: item.country,
      id: item.id,
      MainCover: item.coverAttachment.url1,
      FundraiserTitle: item.title,
      NumberofDonors: 0,
      Story: item.description,
      Amount: item.raisedAmount,
      Percentage: item.raisedAmount / item.requiredAmount,
    };
  });
}
