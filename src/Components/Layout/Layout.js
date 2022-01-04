import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { OutletContainer } from './LayoutElements'

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <OutletContainer>
                <Outlet className="page-content"/>
            </OutletContainer>
            {/* footer goes here */}
        </div>
    )
}

export default Layout
