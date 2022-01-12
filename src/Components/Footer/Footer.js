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
                                    <FooterIconLink to="#">
                                    <ImInstagram/>
                                    </FooterIconLink>
                                    <FooterIconLink to="#">
                                    <ImYoutube/>
                                    </FooterIconLink>
                                    <FooterIconLink to="#">
                                    <ImTwitter/>
                                    </FooterIconLink>
                                    <FooterIconLink to="#">
                                    <ImFacebook2/>
                                    </FooterIconLink>

                                </FooterIcons> 
                        </FooterIconWrapper>
                    </FooterTextWrapper>
            </FooterYellow>
        </FooterContainer>
    )
}

export default Footer
