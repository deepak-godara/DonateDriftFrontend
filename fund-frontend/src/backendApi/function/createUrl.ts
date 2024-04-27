import { UploadFundraisal } from "../services/FundRaisalUpload";
import { GetDonorHistory } from "../services/GetDonorHistory";
import { PendingFundRaisers } from "../services/PendingFundraiser";

const baseUri = "http://localhost:8080";
export const urlFunctions = {
  signinUrl: () => `${baseUri}/auth/signin`,
  signupUri: () => `${baseUri}/auth/signup`,
  VerifyUserUri: () => `${baseUri}/verifyuser`,
  UploadFundraisal: (id: number) => `${baseUri}/api/fundraisers/${id}`,
  // GetFundraisers: () => `${baseUri}/fundraisers`,
  GetFundraiserdata: (id: any) => `${baseUri}/fundraisers/${id}`,
  GetFilteredFundraisers: (
    category: string,
    pagesize: number,
    pagenumber: number,
    city: string,
    country: string
  ) =>
    `${baseUri}/fundraisers/filter?country=${country}&city=${city}&category=${category}&pageSize=${pagesize}&pageNumber=${pagenumber}`,
  GetUserDataUrl: () => `${baseUri}/auth/token`,
  EditProfileUrl:(Id:number)=>`${baseUri}/api/user/update/${Id}`,
  UpdateFudnraiser:(Id:string)=>`${baseUri}/api/status/${Id}`,
  GetUpdates:(Id:string)=>`${baseUri}/status/${Id}`,
  ApproveFundRaiser:(FundRaiserId:number,Status:number)=>`${baseUri}/api/admin/fundraisers/${FundRaiserId}/${Status}`,
  PendingFundRaisers:()=>`${baseUri}/api/admin/pending`,
  PaymentUrl:(Id:string)=>`${baseUri}/payment/create/${Id}`,
  GetDonorHistory:(Id:string)=>`${baseUri}/api/donor-history/${Id}`,

};
