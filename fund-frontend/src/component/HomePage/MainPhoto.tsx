import React from "react";
import styled from "styled-components";
import Designer from "../../assests/Designer.png";

const PhotoContinainer = styled.img`
    margin-top: 3rem;
    width: 100%;
    height: 600px;
`

function Amain() {
  return (
    <PhotoContinainer src={Designer} alt="no" />
  )
}

export default Amain;

