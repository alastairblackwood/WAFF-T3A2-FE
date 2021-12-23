import axios from 'axios';
import React, { useState } from 'react'
import Loading from '../Loading';
import FormInput from './FormInput';
import { Form } from './LogInPageElements';

const baseURL = "http://localhost:5000/api/v1/users/login"

const LogInPage = () => {


    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const inputs = [
        // {
        //     id: "1",
        //     name: "username",
        //     type: "text",
        //     placeholder: "Username",
        //     errorMessage: "",
        //     label: "Username"
        // },
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
        // {
        //     id: "4",
        //     name: "confirmPassword",
        //     type: "password",
        //     placeholder: "Confirm Password",
        //     errorMessage: "",
        //     label: "Confirm Password"
        // },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = new FormData(e.target)
        
        try {
            const config = {
                headers: {
                    "Content-type":"application/json"
                }
            }
            
            setLoading(true)

            // post the request on pressing submit, posting the input values
            const { data } = await axios.post(
                baseURL,
                {
                  email,
                  password,
                },
                config
                );
        
        console.log(data)
        localStorage.setItem("userInfo", JSON.stringify(data))
        setLoading(false);
        } catch (error) {
            setError(error.response.data.message)
            // setLoading(false);
        }

    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

console.log(values)

    return (
        <div>
            <h2>Login</h2>
            {loading && <Loading/>}
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
        </div>
    )
}

export default LogInPage
