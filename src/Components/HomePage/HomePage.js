// import React from 'react'
import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
// import axios from "axios"

// const baseURL = "localhost:5000/api/v1/films"

const HomePage = () => {

    
 
    return (
        <div>
    <Carousel/>
    <About/>
    <a href="/login">
        Login
    </a>
    <a href="/signup">
        Sign Up
    </a>


        </div>

    )
}

export default HomePage
