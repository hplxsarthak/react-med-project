import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const { name, email, password, role } = user;

    const handleInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        await axios
            .post("http://localhost:8080/user/", user, { withCredentials: true })
            .then(res => navigate("/users"))
            .catch(err => {
                console.log("error", err.response.data)
                navigate("/login")
            })
    }


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter User's Name"
                            name="name"
                            value={name}
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={e => handleInputChange(e)}
                            required
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={e => handleInputChange(e)}
                            required
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Role Admin/User"
                            name="role"
                            value={role}
                            onChange={e => handleInputChange(e)}
                            required
                        />
                    </div>
                    <br />
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;