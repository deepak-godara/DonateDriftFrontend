import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { API } from "../API";
import { ProfileType } from "../../component/ProfileEditPage/editForm";
import { Types2 } from "../../component/FundRaisalForm/FormContainer/Main";

interface UserData {
  success: boolean;
  data?: any;
}

async function FormDatas(Data:ProfileType): Promise<any> {
  const data = new FormData();
  data.append("name",Data.UserName.content);
  data.append("city", Data.City.content);
  data.append("country", Data.Country.content);
  data.append("description",Data.AboutMe.content)
  if (Data.ProfilePhoto.content) 
  {
    console.log("yes");
    data.append("profilePicUrl", Data.ProfilePhoto.content);
  }
  return data;
}

export async function UpdateProfile(
  Data: ProfileType,
  Id:number
): Promise<UserData> {
  const Url = urlFunctions.EditProfileUrl(Id);
  console.log(Url)
  const Datas = await FormDatas(Data);
  const res = await API.sendPostRequest2(Url, Datas, true);
  if(res.success)
    {
        return{success:true,data:res.data}
    }
  return { success: false, data: "df" };
}
