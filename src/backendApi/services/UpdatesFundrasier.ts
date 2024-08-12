import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { API } from "../API";
import { Types2 } from "../../component/FundRaisalForm/FormContainer/Main";

interface UserData {
  success: boolean;
  data?: any;
}

async function FormDatas(Description:string,Photo:File): Promise<any> {
  const data = new FormData();
  data.append("description", Description);
  if (Photo) {
    console.log("yes");
    data.append("statusAttachment", Photo);
  }
  return data;
}

export async function UpdateFundraisal(Description:string,Photo:File,Id:string): Promise<UserData> {
  const Url = urlFunctions.UpdateFudnraiser(Id);
  const Datas = await FormDatas(Description,Photo);
  const res = await API.sendPostRequest2(Url, Datas, true);
  if (res.success) return { success: true, data: res.data };
  return { success: false, data: "df" };
}
