import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../login.css"

const Login = () => {
    const [user,setUser] = useState({
        email: "",
        password: "",
    });
    const [redirect,setRedirect] = useState(false);
    const navigate = useNavigate();

    const { email, password} = user;

    const handleSubmit = async e => {
        e.preventDefault();
        await axios
            .post("http://localhost:8080/api/login", user, {withCredentials: true})
            .then(() => setRedirect(true))
            .catch(() => alert("Wrong Email/Password"))


    }

    if(redirect) {
        navigate("/home")
    }

    const handleInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={e => handleSubmit(e)}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div>
                        <input 
                            type="text" 
                            className="form-control"   
                            placeholder="Email Address"
                            name="email"
                            value={email} 
                            onChange = {e => handleInputChange(e)}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            name="password"
                            value={password} 
                            onChange = {e => handleInputChange(e)}
                        />       
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}

export default Login;