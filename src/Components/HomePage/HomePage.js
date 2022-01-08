// import React from 'react'
import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
// import axios from "axios"

// const baseURL = "localhost:5000/api/v1/films"

const HomePage = () => {

    
 
    return (
        <div>
    <Carousel/>
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
