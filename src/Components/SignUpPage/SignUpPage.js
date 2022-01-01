import React, { useState } from 'react'
import axios from 'axios';

import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'
import FormInput from '../LogInPage/FormInput'
import { Form } from '../LogInPage/LogInPageElements'

const baseURL = "http://localhost:5000/api/v1/users/signup"

const SignUpPage = () => {
   
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ("")
    })

    const [message,setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState(false)



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
                
                setLoading(true);
                
                // post the request on pressing submit, posting the input values
                const { data } = await axios.post(
                    baseURL,
                    {
                // post using input values spread operator
                ...values,
            },
            config
                );
                
                setLoading(false);
                localStorage.setItem("userInfo", JSON.stringify(data));

                
            } catch (error){
              setError(error.response.data.message);
              setLoading(false);
            }
        }
        

        console.log(values.email)
    }
 
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    
    return (
        <div className="Signupcontainer">
            <h2>Sign Up</h2>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {message && <ErrorMessage>{message}</ErrorMessage>}
            {loading && <Loading/>}
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
        </div>
    )
}


export default SignUpPage
