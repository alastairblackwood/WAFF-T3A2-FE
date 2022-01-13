import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { OutletContainer } from './LayoutElements'

const Layout = () => {
    


    return (
        <div>
            <Navbar/>
            <OutletContainer>
                <Outlet className="page-content"/>
            </OutletContainer>
            <Footer/>
        </div>
    )
}

export default Layout
