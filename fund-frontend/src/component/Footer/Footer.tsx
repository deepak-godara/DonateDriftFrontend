import React from "react";
import "./Footer.css"
import styled from "styled-components";

const EndLine = styled.div`
    margin-top : 1rem;
    margin-bottom : 1rem;
    font-size: 12px;
    color: #798798;
    width: 100%;
`
const EndLine2 = styled.div`
    font-size: 12px;
    color: #798798;
    width: 100%;
`
const EndLine3 = styled.div`
    font-weight: 600;
    opacity: .5;
    font-size: 16px;
    color: #798798;
    margin-bottom : 2rem;
    margin-top : .5rem;
`

const HelpContiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const InnerValues = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`
const InnerValues2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
`

const StyledLink = styled.a`
    text-decoration : none;
    color : black;
    font-size : 14px;
    transition : 0.4s;
    margin-bottom : 1.5rem;
    align-self: center;
`

const Footer = () =>{
    return(
        <div className="footer">
            <div className="line"></div>
            <HelpContiner>
            <InnerValues>
                <div>
                    <h1>Donate Drift</h1>
                    <EndLine>Donate Drift is your platform for compassionate crowdfunding. Whether it's for personal causes, events, or ambitious projects, we're here to support you. Our mission is to empower individuals worldwide to make a difference by raising funds online.</EndLine>
                    <EndLine2>Donate Drift</EndLine2>
                    <EndLine2>123 Charity Lane,</EndLine2>
                    <EndLine2>Communityville, CD1 4XY,</EndLine2>
                    <EndLine2>United Kingdom.</EndLine2>
                    <EndLine2>Registered company: 07005084"</EndLine2>
                </div>
            </InnerValues>

            <InnerValues2>
                <EndLine3>Project</EndLine3>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
            </InnerValues2>

            <InnerValues2>
                <EndLine3>Project</EndLine3>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
               
            </InnerValues2>

            <InnerValues2>
                <EndLine3>Project</EndLine3>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>
                <StyledLink href="#">About Us</StyledLink>

            </InnerValues2>
           
            </HelpContiner>
        </div>
    );
}

export default Footer;