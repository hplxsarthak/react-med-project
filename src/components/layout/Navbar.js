import axios from "axios";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await axios
            .post("http://localhost:8080/api/logout", { withCredentials: true })
            .then(res => {
                console.log("res",res)
                navigate("/login")
            })
            .catch(err => console.log("error",err))
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/home" className="navbar-brand">
                    Hplx User
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" className="nav-link">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/l" className="nav-link" onClick={() => logout()}>Logout</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                    </ul>
                </div>

                <Link to="/home/add" className="btn btn-outline-light m-2">Add Medicine</Link>
                <Link to="/users/add" className="btn btn-outline-light">Add User</Link>
            </div>
        </nav>
    )
}

export default Navbar;