import { urlFunctions } from "../function/createUrl";
import { API } from "../API";
 interface Datatype{
    Currency:string,
    Description:string,
    Amount:string,
    Name:string,
    userId:number,
}
interface UserData {
    success: boolean;
    data?:any;
  }
async function FormDatas(Data: Datatype): Promise<any> {
    const data = new FormData();
    console.log(Data)
    data.append("method", "paypal");
    data.append("currency", Data.Currency);
    data.append("amount", Data.Amount);
    data.append("description", Data.Description);
    data.append("name", Data.Name);
    data.append("userId",Data.userId.toString());
   
    return data;
  }
  
export async function MakePayments(Id:string,Data:Datatype):Promise<UserData>{
   const url=urlFunctions.PaymentUrl(Id);
   const Datas = await FormDatas(Data);
    const res = await API.sendPostRequest2(url, Datas, true);
    if(res.success) return {success:true,data:res.data}
    else return {success:false}

}