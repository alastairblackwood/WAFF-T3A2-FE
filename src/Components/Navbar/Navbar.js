import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import {NavbarContainer} from './NavbarElements'

const Navbar = () => {
    return (
        // <!-- Always shows a header, even in smaller screens. -->
        <div>
        <div className="mdl-layout mdl-js-layout">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
            {/* <!-- Title --> */}
            <span className="mdl-layout-title">WAFF</span>
            {/* <!-- Add spacer, to align navigation to the right --> */}
            <div className="mdl-layout-spacer"></div>
            {/* <!-- Navigation --> */}
            <nav className="mdl-navigation">
              <Link to="/" className="mdl-navigation__link">Home</Link>
              <Link to="/login" className="mdl-navigation__link"> Login</Link>
            </nav>
            </div>
          </header>
              <div class="mdl-layout__drawer">
              <span class="mdl-layout__title">Simple Layout</span>
              <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="#">Nav link 1</a>
              <a class="mdl-navigation__link" href="#">Nav link 2</a>
              <a class="mdl-navigation__link" href="#">Nav link 3</a>
              </nav>
              </div>
        </div>
        </div>
        
    )
}

export default Navbar
