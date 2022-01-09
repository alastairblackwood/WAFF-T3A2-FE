import React from 'react'
import { Link } from 'react-router-dom'
import { FooterContainer, FooterLinks, FooterLinksWrapper } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper className="">
            <div className="container text-uppercase">
                <div className="row">
                    <div className="col">
                    <FooterLinks to="/">Films</FooterLinks>
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
        </FooterContainer>
    )
}

export default Footer
