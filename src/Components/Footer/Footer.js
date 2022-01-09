import React from 'react'
import { FooterContainer, FooterH2, FooterH2Wrapper, FooterIconColumn, FooterIconWrapper, FooterLinks, FooterLinksWrapper, FooterTextWrapper } from './FooterElements'
import {ImInstagram} from "react-icons/im";
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper className="">
            <div className="container text-uppercase">
                <div className="row">
                    <div className="col">
                    <FooterLinks to="/films">Films</FooterLinks>
                    </div>
                    <div className="col">
                    <FooterLinks to="/about">About</FooterLinks>
                    </div>
                    <div className="col">
                    <FooterLinks to="/schedule">Schedule</FooterLinks>
                    </div>
                    <div className="col">
                    <FooterLinks to="/login">Login</FooterLinks>
                    </div>
                </div>
            </div>
            </FooterLinksWrapper >
            <FooterTextWrapper className='row'>
                <FooterH2Wrapper className="col-7">
                    <FooterH2>wes anderson film festival 20xx</FooterH2>
                    <FooterH2>motion picture theatre</FooterH2>
                </FooterH2Wrapper>
                <FooterIconWrapper className='col-md-auto'>
                    <FooterIconColumn className="icons col">
                        <span> Follow for more</span>
                            <br/>               
                        <ImInstagram/>
                        <ImInstagram/>
                        <ImInstagram/>
                        <ImInstagram/>
                    </FooterIconColumn>
                </FooterIconWrapper>
            </FooterTextWrapper>
        </FooterContainer>
    )
}

export default Footer
