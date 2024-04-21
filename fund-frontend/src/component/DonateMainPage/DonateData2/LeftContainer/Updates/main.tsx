import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../../../Store/AuthUser";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GetUpdates } from "../../../../../backendApi/services/GetUpdates";
import { YourComponent } from "../Story/main";
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1.5rem;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MainPhoto = styled.img`
  height: 330px;
  width: 100%;
`;
const AddUpdate = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  line-height: 150%;
  border-radius:12px;
  background: #4a90e2;
  color: white;
  text-decoration:none;
  padding: 8px;
`;
const Update = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
`;
export interface propTypes {
  id: number;
}
export interface UpdateTypes {
  description: string;
  Photo: string;
}
function FundUpdates(props: propTypes) {
  const ClientContext = useContext(UserContext);
  const [Updates, SetUpdates] = useState<Array<UpdateTypes>>([]);
  const [Show, SetShow] = useState<boolean>(false);
  useEffect(() => {
    let exist = 0;
    for (let i = 0; i < ClientContext.UserFundRaisers.length; i++) {
        console.log(ClientContext.UserFundRaisers[i].id+" df "+props.id)
      if (ClientContext.UserFundRaisers[i].id === props.id) {
        exist = 1;
        break;
      }
    }
    if (exist === 1) SetShow(true);
  }, []);
  useEffect(() => {
    async function GetData( Id:string){
       const Data=await GetUpdates(Id);
       console.log(Data)
       if(Data.data)
        SetUpdates(Data.data)
    }
    GetData(props.id.toString());
  }, []);

  return (
    <MainContainer>
      {Show && (
        <Link to={`/fundraiser/update/${props.id}`} style={{width:"100%", textDecoration:"none", paddingBottom:"1rem", borderBottom:"2px solid  #f5f6f7"}}>
          <AddUpdate>Add Update</AddUpdate>
        </Link>
      )}
      {Updates.map((item,index)=><Update>
        <MainPhoto src={item.Photo}></MainPhoto>
        <YourComponent htmlContent={item.description}></YourComponent>
      </Update>)}
    </MainContainer>
  );
}

export default FundUpdates;
