import { UploadFundraisal } from "../services/FundRaisalUpload";

const baseUri = "http://localhost:8080";
export const urlFunctions = {
  signinUrl: () => `${baseUri}/auth/signin`,
  signupUri: () => `${baseUri}/auth/signup`,
  VerifyUserUri: () => `${baseUri}/verifyuser`,
  UploadFundraisal: (id: number) => `${baseUri}/api/fundraisers/${id}`,
  GetFundraisers: () => `${baseUri}/api/fundraisers`,
  GetFundraiserdata: (id: any) => `${baseUri}/api/fundraisers/${id}`,
  GetFilteredFundraisers: (
    category: string,
    pagesize: number,
    pagenumber: number,
    city: string,
    country: string
  ) =>
    `${baseUri}/api/fundraisers/filter?country=${country}&city=${city}&category=${category}&pageSize=${pagesize}&pageNumber=${pagenumber}`,
  GetUserDataUrl: () => `${baseUri}/auth/token`,
  EditProfileUrl:(Id:number)=>`${baseUri}/api/user/update/${Id}`
};
