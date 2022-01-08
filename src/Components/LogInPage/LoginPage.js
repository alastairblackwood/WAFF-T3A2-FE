import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useNavigate, Link} from "react-router-dom"
import Loading from '../Loading';
import FormInput from './FormInput';
import { Form, LoginContainer } from './LogInPageElements';
import { useGlobalState } from '../../utils/stateContext';
import ErrorMessage from '../ErrorMessage';

const baseURL = "http://localhost:5000/api/v1/users/login"

const LogInPage = ({userInfo}) => {

    // include global state context
    const { userHasAuthenticated } = useGlobalState();

    // set initial states for error and loading
    const [error, setError] = useState(false);
    
    const [loading, setLoading] = useState(false)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const config = {
                headers: {
                    "Content-type":"application/json"
                }
            }
            
            // begin Loading sequence/spinner
            setLoading(true)

            // post the request on pressing submit, posting the input values
            const { data } = await axios.post(
                baseURL,
                {
                // post using input values spread operator
                ...values,
                },
                config
                );
        
            // alert("logged in")
            userHasAuthenticated(true);
            
            // log userInfo in localStorage in browser
            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data))
             // turn off Loading sequence/spinner
            setLoading(false);

            if (data.role === "admin"){
                history("/about")
            } else {
                history("/")
            }    
        } catch (error) {
            setError(error.response.data.message)
            setLoading(false);
        }

    };

    // updates input forms with each key
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }


console.log(values)

    return (
    
        <LoginContainer >
            <h2>Login</h2>
            
            {loading && <Loading/>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {/* {errorMessage && <p>{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>} */}
            <Form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange} 
                    />
                ))}
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Submit</button>
            </Form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </LoginContainer>

    )
}

export default LogInPage
