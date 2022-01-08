import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { OutletContainer } from './LayoutElements'

const Layout = () => {
    
    const [isOpen,setIsOpen] = useState(false);
    // toggle true/false if open/closed
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar toggle={toggle}/>
            <OutletContainer>
                <Outlet className="page-content"/>
            </OutletContainer>
            {/* footer goes here */}
        </div>
    )
}

export default Layout
