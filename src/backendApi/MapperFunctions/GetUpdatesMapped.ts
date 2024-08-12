import { RequiredFormat } from "../../component/DonationCard/main";
import { UpdateTypes } from "../../component/DonateMainPage/DonateData2/LeftContainer/Updates/main";
export async function GetUpdatesMapped(
  Data: any
): Promise<UpdateTypes[]> {
  if (Data === undefined || Data === null) return [];
  return Data.map((item: any, index: number) => {
    return {
      Photo: item.statusAttachment[0].url2,
      description: item.description,
    };
  });
}
