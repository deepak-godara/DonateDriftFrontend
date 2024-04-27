import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import LeftContainer from "./LeftContainer";
import AdminOperation from "./AdminOperation";
import { donorstypes } from "../main";
import UserContext from "../../../Store/AuthUser";
import PaymentError from "../../ErrorPayment/main";
import Payment from "../../Payment";
import Paymentcancelled from "../../CancelledPayent/main";
import DonationForm from "./LeftContainer/DonationForm";
import { useParams } from "react-router-dom";
const MainContainer = styled.div`
  margin-top: 52px;
  width: 100%;
  position: relative;
  justify-content: space-between !important;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &:-webkit-scrollbar {
    width: 0;
  }
`;
const DonorDetails = styled.div`
  list-style: none;
  box-sizing: border-box;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top: 0;
  max-width: 80%;
  margin-bottom: 1rem;
`;
interface propTypes {
  CreaterId: number;
  FundRaiserPhotos: Array<string>;
  FundRaiserStory: string;
  Donors: Array<donorstypes>;
  Amount:number;
  NoDonors:number;
  RequiredAmount:number;
}
function Main(props: propTypes) {
  const User=useContext(UserContext)
  const Param=useParams()
  const location=useLocation();
  console.log(location.pathname)
  const id=Param.id;
  const Amount=Param.amount;
  // const [userRole, SetUserRole] = useState<string>("ADMIN");
  return (
    <MainContainer>
      <LeftContainer
        Id={props.CreaterId}
        FundRaiserPhotos={props.FundRaiserPhotos}
        FundRaiserStory={props.FundRaiserStory}
        Donors={props.Donors}
      />
      {!Param.amount&&User.UserRole === "ADMIN" &&<AdminOperation Id={props.CreaterId}/>}
      {!Param.amount&&User.UserRole !== "ADMIN" && <DonationForm Id={props.CreaterId} 
      Amount={props.Amount} RequiredAmount={props.RequiredAmount} NoDonors={props.NoDonors}></DonationForm>}
      {location.pathname===`/payment/success/${id}/${Amount}`&&Param.amount&&<Payment></Payment>}
      {location.pathname===`/payment/cancel/${id}/${Amount}`&&<Paymentcancelled/>}
      {location.pathname===`/payment/error/${id}/${Amount}`&&<PaymentError/>}
    </MainContainer>
  );
}

export default Main;
