import { UploadFundraisal } from "../services/FundRaisalUpload"

const baseUri="http://localhost:8080"
export const urlFunctions={
    signinUrl:()=>`${baseUri}/auth/signin`,
    signupUri:()=>`${baseUri}/auth/signup`,
    VerifyUserUri:()=>`${baseUri}/verifyuser`,
    UploadFundraisal:(id:number)=>`${baseUri}/api/fundraisers/${id}`,
    GetFundraisers:()=>`${baseUri}/api/fundraisers`
}