import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [meds, setMeds] = useState([]);

    useEffect(() => {
        loadMed();
    }, [])

    const loadMed = async () => {
        const response = await axios.get("http://localhost:8080/med/");
        console.log("Response", response)
        setMeds(response.data.reverse())
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1> Medicine List</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Medicine Name</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Strength</th>
                            <th scope="col">Medicine Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meds.map((med,index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{med.Med_Name}</td>
                                        <td>{med.Comp_Name}</td>
                                        <td>{med.Brand}</td>
                                        <td>{med.Strength}</td>
                                        <td>{med.Med_Type}</td>
                                        <td>
                                            <Link to="/home" className="btn btn-outline-primary" style={{"marginRight": 10}}>Edit</Link>
                                            <Link to="/login"className="btn btn-danger " >Delete</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;