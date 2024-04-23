import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MainContainer = styled.div`
  font-family: Lato, sans-serif;
  padding: 0;
  position: sticky;
  //   right:2rem;
  top: 1rem;
  border-radius: 16px;
  text-align: center;
  width: 33.5%;
  height: 22rem;
  display: flex;
  padding-bottom:3.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 2rem;
  box-shadow: 0 1.9021px 3.53246px rgba(47, 67, 90, 0.0278729),
    0 5.25905px 9.76681px rgba(47, 67, 90, 0.04),
    0 12.6618px 23.5147px rgba(47, 67, 90, 0.0521271),
    0 42px 78px rgba(47, 67, 90, 0.08);
`;
interface inpuprops{
    $color:string
}
const Button1 = styled.button<inpuprops>`
  border-radius: 8px;
  width: 80%;
  border: 1px solid #eaebee;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: white;
  background:${(props) => (props.$color ? props.$color : "#6ec052")};
  border-color: #4a90e2;
  cursor: pointer;
  transition: 0.4s;
  padding: 1rem 0rem;
  &:hover {
    background: #1758a5;
  }
`;
const Heading = styled.div`
  position: absolute;
  margin-top: 2.5rem;
  padding:0rem 1rem;
  line-height: 1.3;
//   line-ga
  width: 100%;
  top:0rem;
  text-align: center;
  font-weight: 700;
  font-size: 26px;
  padding-bottom:1.5rem;
  border-bottom:2px solid #f5f6f7;;
  color: rgb(121, 135, 152);
`;
function PaymentSuccess(){
    const Param=useParams()
    const navigate=useNavigate();
    const SubmitFunction=async(Id:number)=>{
        navigate(`/fundraiser/${Param.id}/donate`);
           
      }
return(
    <MainContainer>
         <Heading>Thank You For Donation of $ {Param.amount}</Heading>
         {/* <Link to={`/fundraiser/${Param.id}/donate`} style={{textDecoration:"none",width:"80%"}}> */}
         <Button1 $color="#4a90e2"  onClick={()=>SubmitFunction(1)}>Donate More</Button1>
         {/* </Link> */}
         <Link to={`/`} style={{textDecoration:"none",width:"80%"}}>
      <Button1 $color="rgb(121, 135, 152)" onClick={()=>SubmitFunction(0)} style={{width:"100%"}}>Home Page</Button1>
      </Link>
    </MainContainer>
)
}
export default PaymentSuccess