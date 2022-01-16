import React, {useContext} from 'react'
import { FooterContainer, FooterA, FooterH2Wrapper, FooterYellow, FooterIconWrapper, FooterLinks, FooterLinksWrapper, FooterTextWrapper, FooterSpan, FooterIcons, FooterIconLink } from './FooterElements'
import {ImInstagram, ImYoutube, ImTwitter, ImFacebook2} from "react-icons/im";
import { AuthContext } from '../../utils/stateContext';

const Footer = () => {

    const auth = useContext(AuthContext)

    const handleLogout = () => {
      //removes userInfo from localStorage
      localStorage.removeItem("userInfo");
      // sets isUserLoggedIn to false
      auth.logout();
      alert("logged out successfully")
    }

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
                        {auth.isLoggedIn ? 
                        (
                            <FooterLinks onClick={handleLogout} to="#">Logout</FooterLinks>
                        ): (
                            <FooterLinks to="/login">Login</FooterLinks>
                        )
                    }
                        </div>
                    </div>
                </div>
                </FooterLinksWrapper >
                <FooterYellow>
                    <FooterTextWrapper className='row'>
                        <FooterH2Wrapper className="col-7 text-uppercase">
                            <FooterA to="/">wes anderson film festival 20xx</FooterA>
                            <br/>
                            <FooterA to="/">motion picture theatre</FooterA>
                        </FooterH2Wrapper>
                        <FooterIconWrapper className='col-md-auto'>
                                <div>
                                <FooterSpan className='text-uppercase'> Follow for more</FooterSpan>
                                </div>     
                                <FooterIcons>  
                                    <FooterIconLink href="https://github.com/wpham1">
                                    <ImInstagram/>
                                    </FooterIconLink>
                                    <FooterIconLink href="https://github.com/alastairblackwood">
                                    <ImYoutube/>
                                    </FooterIconLink>
                                    <FooterIconLink href="https://github.com/nataliack">
                                    <ImTwitter/>
                                    </FooterIconLink>
                                    <FooterIconLink href="#">
                                    <ImFacebook2/>
                                    </FooterIconLink>

                                </FooterIcons> 
                    <span style={{color:"#eac70c"}}>Copyright WAFF, Motion Picture Cinema: Patterns by Hero Patterns</span>
                        </FooterIconWrapper>
                    </FooterTextWrapper>
            </FooterYellow>
        </FooterContainer>
    )
}

export default Footer
