import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import { useGlobalState } from '../../utils/stateContext';
import {NavbarContainer, NavA} from './NavbarElements'
import {IoClose} from "react-icons/io5"

const Navbar = ({isOpen, toggle}) => {
  const { userHasAuthenticated } = useGlobalState();

 const userid = localStorage.getItem("id")
 const user = localStorage.getItem("userInfo")
 console.log(user)
  // will need to add this to navbar
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    userHasAuthenticated(false);
  }
 
    return (
      <div >
        <NavbarContainer isOpen={isOpen} className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavA className="navtitle" href="/">WES ANDERSON FILM FESTIVAL</NavA>
            <button className="navbar-dd" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-d-icon" onClick={toggle}></span>
            </button>
            <button>
            <IoClose onClick={toggle}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item"> */}
                {/* <a className="nav-link active" aria-current="page" href="#">Films</a> */}
                <Link to="/" className="nav-link" aria-current="page">Films</Link>
                {/* </li> */}
                {/* <li className="nav-item"> */}
                <Link to="/about" className="nav-link" aria-current="page">About</Link>
                {/* </li> */}
                {/* <li className="nav-item">
                <Link to={`/users/${id}`} className="nav-link" aria-current="page">About</Link>
                </li> */}
                {/* <li className="nav-item"> */}
                <Link to="/schedule" className="nav-link" aria-current="page">Schedule</Link>
                {/* </li> */}
                {/* <li className="nav-item"> */}
                <a className="nav-link disabled">Disabled</a>
                {/* </li> */}
                {userHasAuthenticated ? 
            (
                <button onClick={handleLogout}>Logout</button>
            )
            : (
            <button>Login</button>
            )}
              </div>

     
            </div>
          </div>     
        </NavbarContainer>
      </div>
        
    )
}

export default Navbar
