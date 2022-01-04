import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import LogIn from '../LogInPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import {NavbarContainer} from './NavbarElements'

const Navbar = () => {
    return (
        // <!-- Always shows a header, even in smaller screens. -->
        <NavbarContainer className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header mdl-layout__header--scroll">
            <div className="mdl-layout__header-row">
            {/* <!-- Title --> */}
            <span className="mdl-layout-title">WAFF</span>
            {/* <!-- Add spacer, to align navigation to the right --> */}
            <div className="mdl-layout-spacer"></div>
            {/* <!-- Navigation --> */}
            <nav className="mdl-navigation">
              <Link to="/" className="mdl-navigation__link">Home</Link>
              <Link to="/login" className="mdl-navigation__link"> Login</Link>
              
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
            </div>
          </header>
        </NavbarContainer>
        
    )
}

export default Navbar
