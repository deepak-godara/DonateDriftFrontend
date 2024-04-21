import React, { useContext, useState } from "react";
import styled from "styled-components";
import LeftContainer from "./LeftContainer";
import AdminOperation from "./AdminOperation";
import UserContext from "../../../Store/AuthUser";
import DonationForm from "./LeftContainer/DonationForm";
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
interface propTypes {
  CreaterId: number;
  FundRaiserPhotos: Array<string>;
  FundRaiserStory: string;
  Donors: Array<{
    Name: string;
    Date: string;
    Amount: number;
    comment: string;
  }>;
}
function Main(props: propTypes) {
  const User=useContext(UserContext)
  // const [userRole, SetUserRole] = useState<string>("ADMIN");
  return (
    <MainContainer>
      <LeftContainer
        Id={props.CreaterId}
        FundRaiserPhotos={props.FundRaiserPhotos}
        FundRaiserStory={props.FundRaiserStory}
        Donors={props.Donors}
      />
      {User.UserRole === "ADMIN" &&<AdminOperation Id={props.CreaterId}/>}
      {User.UserRole !== "ADMIN" && <DonationForm></DonationForm>}
    </MainContainer>
  );
}

export default Main;
