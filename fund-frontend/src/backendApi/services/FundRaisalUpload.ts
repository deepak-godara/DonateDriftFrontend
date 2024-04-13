import { urlFunctions } from "../function/createUrl";
import Cookies from "js-cookie";
import { API } from "../API";
import { Types2 } from "../../component/FundRaisalForm/FormContainer/Main";

interface UserData {
  success: boolean;
  data?: any;
}

async function FormDatas(Data: Types2): Promise<any> {
  const data = new FormData();
  // console.log(Data)
  data.append("title", JSON.stringify(Data.title));
  data.append("currency", Data.currency);
  data.append("city", Data.city);
  data.append("country", Data.country);
  data.append("category", Data.category);
  data.append("description", Data.description);
  if (Data.coverPhoto) {
    console.log("yes");
    data.append("coverPhoto", Data.coverPhoto);
  }
  data.append("firstName", Data.firstName);
  data.append("lastName", Data.lastName);
  data.append("requiredAmount", Data.requiredAmount);
  for (let i = 0; i < Data.files.length; i++) {
    let j = i + 1;
    data.append(`file${j}`, Data.files[i]);
  }
  data.append("videoUrl", Data.videoUrl);
  return data;
}

export async function UploadFundraisal(Data: Types2): Promise<UserData> {
  const Url = urlFunctions.UploadFundraisal(1);
  const Datas = await FormDatas(Data);
  const res = await API.sendPostRequest2(Url, Datas, true);
  if (res.success) return { success: true, data: res.data };
  return { success: false, data: "df" };
}
