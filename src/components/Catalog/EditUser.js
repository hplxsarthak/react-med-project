import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [user,setUser] = useState({
        name: "",
        email: "",
        password: "",
        role:"",
    });

    const {name,email,password,role} = user;

    useEffect(() => {
        loadUser();
    },[])

    const handleInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/users")


    }

    const loadUser = async () => {
        const prev_user = await axios.get(`http://localhost:8080/user/${id}`)
        setUser({
            name: prev_user.data.Name,
            email: prev_user.data.Email,
            password: prev_user.data.Password,
            role: prev_user.data.role
        })
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit usericine</h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter User's Name"
                            name="name"
                            value={name}
                            onChange = {e => handleInputChange(e)}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange = {e => handleInputChange(e)}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange = {e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Role"
                            name="role"
                            value={role}
                            onChange = {e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;