import React, { useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import { useEffect } from "react";
import DonationCard from "../DonationCard";
import { FilteredFundRaisers } from "../../backendApi/services/GetFilteredFundRaisers";
import { RequiredFormat } from "../DonationCard/main";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const MainContainer1 = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 1rem auto;
  z-index: 100;
`;
const MainContainer = styled.div`
  width: 90%;
  height: 30rem;
  display: flex;
  position: relative;
  flex-direction: row;
  padding: 0rem 0rem 1.5rem 0rem;
  justify-content: space-between;
  column-gap: 1.5rem;
  transition: 0.5;
  z-index: 100;
`;
interface InputWidth {
  $width: number;
  $trans: number;
}
const MovContainer = styled.div<InputWidth>`
  width: auto;
  display: flex;
  top: 0rem;
  left: ${(props) => `-${props.$width}rem`};
  position: absolute;
  margin-left: 1.55rem;
  flex-direction: row;
  z-index:100;
  padding: 0rem 0rem 1.5rem 0rem;
  justify-content: space-between;
  column-gap: 1.7rem;
  transition: ${(props) => `${props.$trans}s`};
`;
const Forwardiv = styled.div`
  position: absolute;
  right: -0%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.23);
  z-index: 500;
  border-radius: 50%;
  background: white;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.25rem;
  top: 50%;
`;
const Backwardiv = styled.div`
  position: absolute;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  left: -0%;
  top: 50%;
  padding-left: 0.55rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background: white;
  z-index: 500;
`;
function SuccessFull() {
  const [Categorys, SetCategory] = useState<string>("Education");
  const [Fundrasiers, SetFundraisers] = useState<RequiredFormat[]>([]);
  const [Moved, SetMoved] = useState<number>(0);
  const [MaxShifts, SetShifts] = useState<number>(0);
  const [Shifts, MoveShifts] = useState<number>(0);
  const [trans, SetTrans] = useState<number>(0.5);
  useEffect(() => {
    async function getfundraisers() {
      console.log("hii")
      const data = await FilteredFundRaisers(Categorys, "null", "null", 6, 0);
      if (data.success && data.data) {
        SetFundraisers(data.data);
        SetShifts(data.data.length - 3);
      }
    }
    getfundraisers();
  }, []);
  const ChangeCategory = async (CatgeoryItem: string) => {
    SetCategory(CatgeoryItem);
    SetTrans(0);
    const data = await FilteredFundRaisers(CatgeoryItem, "null", "null", 6, 0);
    if (data.success && data.data) {
      SetFundraisers(data.data);
      SetShifts(data.data.length - 2);
      SetMoved(0);
      MoveShifts(0);
      setTimeout(() => {
        SetTrans(0.5);
      }, 500);
    }
  };
  const ShiftContainer = (val: number) => {
    const vals = (Moved + val) * 19.5;
    console.log(vals);
    SetMoved((prevState) => prevState + val);
    MoveShifts(vals);
  };
  return (
    <MainContainer1>
      <Category ChangeFunc={ChangeCategory} category={Categorys} />
      {MaxShifts > Moved && (
        <Forwardiv>
          <MdArrowForwardIos
            onClick={() => {
              ShiftContainer(1);
            }}
            style={{ height: "2rem", width: "2rem" }}
          />
        </Forwardiv>
      )}
      {Moved > 0 && (
        <Backwardiv>
          <MdArrowBackIos
            onClick={() => {
              ShiftContainer(-1);
            }}
            style={{ height: "2rem", width: "2rem" }}
          />
        </Backwardiv>
      )}
      <MainContainer>
        <MovContainer $width={Shifts} $trans={trans}>
          {Fundrasiers.length > 0 &&
            Fundrasiers.map((item, index) => (
              <DonationCard Data={item} ></DonationCard>
            ))}
        </MovContainer>
      </MainContainer>
    </MainContainer1>
  );
}

export default SuccessFull;
