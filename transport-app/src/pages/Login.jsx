import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { json, useNavigate } from 'react-router-dom';

export function Login() {
    const navigate=useNavigate();
    const responseMessage = (response) => {
        localStorage.setItem("User",JSON.stringify(response))
        navigate("/home")

    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
