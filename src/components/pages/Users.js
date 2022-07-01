import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0);
    const limit = 3
    const navigate = useNavigate();

    useEffect(() => {
        loadUser();
    }, [search, page])

    const loadUser = async () => {
        await axios
        .get(`http://localhost:8080/user/search&pages?s=${search}&page=${page}&limit=${limit}`,{withCredentials: true})
            .then((response) => {
                console.log("Response", response.data);
                setTotalPages(response.data.total_page);
                setUsers(response.data.data.reverse())
            })
            .catch(err => {
                console.log("error", err.response.data)
                navigate("/login")
            })
    }

    const deleteUser = async id => {
        await axios
        .delete(`http://localhost:8080/user/${id}`,{withCredentials: true})
        .then(() => loadUser())
            .catch(err => {
                console.log("error", err.response.data)
                navigate("/login")
            })
    }

    // const handleSearch = async e => {
    //     e.preventDefault();
    //     await axios
    //         .get(`http://localhost:8080/user/search?s=${search}`)
    //         .then((response) => {
    //             console.log(response);
    //             setMeds(response.data.reverse());
    //             setSearch("");
    //         })
    //         .catch(err => console.log(err));
    // }

    // pagination
    const getPrevPage = () => {
        let pageNum = page;
        if (pageNum === 1)
            return;

        setPage(page - 1);
        return;
    }

    const getNextPage = () => {
        let pageNums = page;
        if (pageNums === totalPages)
            return;

        setPage(page + 1);
        return;
    }
    return (
        <div className="container">
            <div className="py-4">
                <form
                    style={{
                        margin: "auto",
                        padding: "15px",
                        maxWidth: "400px",
                        alignContent: "center"
                    }}
                    className="d-flex input-group w-auto"
                    // onSubmit={e => handleSearch(e)}
                    onSubmit={e => e.preventDefault()}
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search User Name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* <button className="btn btn-dark btn-block" >Search</button> */}

                </form>

                <div className="py-4 mt-5">
                    <h1 className="text-center"> Users List</h1>
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User's Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    const id = user.ID;
                                    return (
                                        <tr key={id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.Name}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Password}</td>
                                            <td>{user.Role}</td>
                                            <td>
                                                <Link to={`/users/edit/${id}`} className="btn btn-outline-primary" style={{ "marginRight": 10 }}>Edit</Link>
                                                <Link to="/users" className="btn btn-danger " onClick={() => deleteUser(id)}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center align-items-center" style={{ "width": "100%" }}>
                        <button className="btn btn-primary" onClick={() => getPrevPage()}>PREV</button>
                        <p>{page} of {totalPages}</p>
                        <button className="btn btn-primary" onClick={() => getNextPage()}>NEXT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;
