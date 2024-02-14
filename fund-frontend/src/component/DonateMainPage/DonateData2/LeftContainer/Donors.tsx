import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  max-height: 100vh;
  over-flow: scroll;
  flex-direction: column;
`;
const Donorr = styled.div`
  color: #5c74ef !important;
  margin-bottom: 20px;
  margin-top: 30px;
  font-weight: 700;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 150%;
`;
const DonorComponent = styled.div`
  padding: 12px 20px 12px 16px;
  margin-bottom: 12px;
  border: 1px solid #eaebee;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
`;
const DonorIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;
const DonorDetails = styled.div`
  list-style: none;
  box-sizing: border-box;
  margin-top: 0;
  max-width: 80%;
  margin-bottom: 1rem;
`;
const DonorData1 = styled.div`
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #2f435a;
`;
const DonorData2 = styled.div`
  color: #6d8191;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  color: #798798;
  margin-top: 0;
`;
const DonorData3 = styled.div`
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 400;
  padding-top: 12px;
  font-size: 14px;
  line-height: 170%;
  color: #2f435a;
`;
function DonorsElement(props: PropTypes) {
  return (
    <DonorComponent>
      <DonorIcon>
        <BsPersonCircle
          style={{
            color: "#baefba",
            border: "none",
            background: "#d9f7d938",
            borderRadius: "50%",
            height: "100%",
            width: "100%",
          }}
        />
      </DonorIcon>
      <DonorDetails>
        <DonorData1>{props.Name}</DonorData1>
        <DonorData2> Donated on {props.Date}</DonorData2>
        <DonorData3>{props.comment}</DonorData3>
      </DonorDetails>
    </DonorComponent>
  );
}
interface PropTypes {
  Name: string;
  Date: string;
  Amount: number;
  comment: string;
}
interface propTypes {
  Donors: Array<{
    Name: string;
    Date: string;
    Amount: number;
    comment: string;
  }>;
}
function Donors(props: propTypes) {
  return (
    <MainContainer>
        <Donorr>Donors & Comments</Donorr>
      {props.Donors.map((item, index) => DonorsElement(item))}
    </MainContainer>
  );
}

export default Donors;
