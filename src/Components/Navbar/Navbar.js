import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import { AuthContext } from '../../utils/stateContext';
import {NavbarContainer, NavA, NavLi, NavCollapse, NavButton} from './NavbarElements'
import {IoClose} from "react-icons/io5"

const Navbar = () => {

 // create useContext instance from stateContext.js AuthContext methods
 const auth = useContext(AuthContext)

  const handleLogout = () => {
    //removes userInfo from localStorage
    localStorage.removeItem("userInfo");
    // sets isUserLoggedIn to false
    auth.logout();
    alert("You've logged out successfully!")
  }
 
    return (
      
        <NavbarContainer className="navbar navbar-light text-uppercase">
            <NavA to="/" className="navtitle" href="/">WES ANDERSON FILM FESTIVAL</NavA>
            {/* toggler */}

            <NavCollapse >
              
                <NavLi to="/films"  aria-current="page">Films</NavLi>
                <NavLi to="/about"  aria-current="page">About</NavLi>
                <NavLi to="/schedule"  aria-current="page">Schedule</NavLi>
            {auth.isLoggedIn ? 
            (
                <NavButton  onClick={handleLogout}>LOGOUT</NavButton>
            )
            : (
            <NavLi   aria-current="page" to="/login">Login</NavLi>
            )}

            </NavCollapse>
        </NavbarContainer>        
    )
}

export default Navbar
