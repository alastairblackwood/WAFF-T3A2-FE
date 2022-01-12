import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import { AuthContext } from '../../utils/stateContext';
import {NavbarContainer, NavA} from './NavbarElements'
import {IoClose} from "react-icons/io5"

const Navbar = ({isOpen, toggle}) => {

 // create useContext instance from stateContext.js AuthContext methods
 const auth = useContext(AuthContext)

  const handleLogout = () => {
    //removes userInfo from localStorage
    localStorage.removeItem("userInfo");
    // sets isUserLoggedIn to false
    auth.logout();
    alert("logged out successfully")
  }
 
    return (
      <div >
        <NavbarContainer isOpen={isOpen} className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavA className="navtitle" href="/">WES ANDERSON FILM FESTIVAL</NavA>
            <button className="navbar-d" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-d-icon" onClick={toggle}></span>
            </button>
            <button>
            <IoClose onClick={toggle}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/films" className="nav-link" aria-current="page">Films</Link>
                <Link to="/about" className="nav-link" aria-current="page">About</Link>
                <Link to="/schedule" className="nav-link" aria-current="page">Schedule</Link>
            {auth.isLoggedIn ? 
            (
                <button onClick={handleLogout}>Logout</button>
            )
            : (
            <Link to="/login">Login</Link>
            )}
              </div>

     
            </div>
          </div>     
        </NavbarContainer>
      </div>
        
    )
}

export default Navbar
