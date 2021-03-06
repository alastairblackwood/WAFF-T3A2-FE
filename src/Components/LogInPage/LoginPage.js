import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import {useNavigate, Link} from "react-router-dom"
import Loading from '../Loading';
import FormInput from './FormInput';
import { Form, LoginContainer, SubmitButton } from './LogInPageElements';
import { useGlobalState } from '../../utils/stateContext';
import ErrorMessage from '../ErrorSuccessMessages/ErrorMessage';
import SuccessMessage from '../ErrorSuccessMessages/SuccessMessage';
import {AuthContext} from '../../utils/stateContext';

const baseURL = "http://localhost:5000/api/v1/users/login"
const herokuURL = `https://wesandersonfilmfestival.herokuapp.com/api/v1/users/login`

const LogInPage = () => {
    
    // create useContext instance from stateContext.js AuthContext methods
    const auth = useContext(AuthContext);


    // set initial states for error and loading
    const [error, setError] = useState(false);
    // set initial states for email and password
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    // form inputs and values
    const inputs = [
        {
            id: "1",
            
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "",
            label: "Email"
        },
        {
            id: "2",
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "",
            label: "Password"
        },
    ]
    const history = useNavigate();

    // on button submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const config = {
                headers: {
                    "Content-type":"application/json"
                }
            }
            
            // begin Loading sequence/spinner
            // setLoading(true)
            auth.loading();
            // post the request on pressing submit, posting the input values
            const { data } = await axios.post(
                herokuURL,
                {
                // post using input values spread operator
                ...values,
                },
                config
                );
        
                auth.login();
                // alert("logged in")

            // log userInfo in localStorage in browser
            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data))
            // turn off Loading sequence/spinner
            auth.notloading();

            console.log(data.data);
            console.log(data.data.user["role"])
            if (data.data.user["role"] === "admin"){
                auth.adminRole()
                console.log(auth.adminRole)
                history("/films")
            } else {
                history("/")
            }    
        } catch (error) {
            auth.notloading();
            setError(error.response.data.message)
        }

    };

    // updates input forms with each key
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
    
        <LoginContainer >
            <h2>Login</h2>
            
            {auth.isLoading && <Loading/>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange} 
                    />
                ))}
                <SubmitButton>Log In!</SubmitButton>
            </Form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </LoginContainer>

    )
}

export default LogInPage
