import React, { useState, useContext } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import ErrorMessage from '../ErrorSuccessMessages/ErrorMessage'
import Loading from '../Loading'
import FormInput from '../LogInPage/FormInput'
import { Form, LoginContainer, SubmitButton } from '../LogInPage/LogInPageElements'
import { AuthContext } from '../../utils/stateContext';

const baseURL = "http://localhost:5000/api/v1/users/signup"
const herokuURL = `https://wesandersonfilmfestival.herokuapp.com/api/v1/users/signup`

const SignUpPage = () => {
    
    // create useContext instance from stateContext.js AuthContext methods
    const auth = useContext(AuthContext);
    // set initial form states
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ("")
    })

    const [message,setMessage] = useState(null);
    const [error, setError] = useState(false);
    const history = useNavigate();

    // form inputs
    const inputs = [
        {
            id: "1",
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage: "",
            label: "Name"
        },
        {
            id: "2",
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "",
            label: "Email"
        },
        {
            id: "3",
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "",
            label: "Password"
        },
        {
            id: "4",
            name: "passwordConfirm",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "",
            label: "Confirm Password"
        },
    ]

    //on button submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(values.password !== values.passwordConfirm){
            setMessage("Passwords do not match.")
        } else {
            
            setMessage(null);
            
            try{
                const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                };
                
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
                // turn off loader
                auth.notloading();
                // set global state to logged in
                auth.login();
                //set userInfo inside localStorage
                localStorage.setItem("userInfo", JSON.stringify(data));
                history("/")
                
            } catch (error){
              setError(error.response.data.message);
              auth.notloading();
            }
        };
        
    }
 
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    
    return (
        <LoginContainer className="Signupcontainer">
            <h2>Sign Up</h2>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {message && <ErrorMessage>{message}</ErrorMessage>}
            {auth.isLoading && <Loading/>}
            <Form onSubmit={handleSubmit}>
            {inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange} 
                    />
                ))}
                <SubmitButton className="button">Sign Up!</SubmitButton>
            </Form>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </LoginContainer>
    )
}


export default SignUpPage
