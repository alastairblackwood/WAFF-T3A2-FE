// import React from 'react'
import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/stateContext';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import Schedule from '../Schedule/Schedule';
// import axios from "axios"

// const baseURL = "localhost:5000/api/v1/films"

const HomePage = () => {

    const auth = useContext(AuthContext)

 
    return (
        <div>
    <Carousel />
    <About/>
    <Schedule/>
    {/* <a href="/login">
        Login
    </a>
    <a href="/signup">
        Sign Up
    </a> */}
        </div>

    )
}

export default HomePage
