import React, { useState, useEffect} from 'react'
import axios from "axios"

const baseURL = "localhost:5000/api/v1/films"

const HomePage = () => {

    // const [data, setData] = useState([]);

    // const useEffect = ( () => {
    //     axios.get(baseURL).then((response) => {
    //         setData(response.data);
    //       });
    //     }, []);
      
 
    return (
        <div>
            {/* <ul>
                {data.films}
            </ul> */}
    Hello

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
