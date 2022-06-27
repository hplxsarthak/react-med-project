import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [meds, setMeds] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(() => {
        loadMed();
    }, [search])

    const loadMed = async () => {
        const response = await axios.get(`http://localhost:8080/med/search?s=${search}`);
        console.log("Response", response.data);
        setMeds(response.data.reverse())
    }

    const deleteMed = async id => {
        await axios.delete(`http://localhost:8080/med/${id}`);
        loadMed();
    }

    // const handleSearch = async e => {
    //     e.preventDefault();
    //     await axios
    //         .get(`http://localhost:8080/med/search?s=${search}`)
    //         .then((response) => {
    //             console.log(response);
    //             setMeds(response.data.reverse());
    //             setSearch("");
    //         })
    //         .catch(err => console.log(err));
    // }

    return (
        <div className="container">
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
                    placeholder="Search Medicine Name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* <button className="btn btn-dark btn-block" >Search</button> */}

            </form>

            <div className="py-4 mt-5">
                <h1 className="text-center"> Medicine List</h1>
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
                            meds.map((med, index) => {
                                const id = med.ID;
                                return (
                                    <tr key={id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{med.Med_Name}</td>
                                        <td>{med.Comp_Name}</td>
                                        <td>{med.Brand}</td>
                                        <td>{med.Strength}</td>
                                        <td>{med.Med_Type}</td>
                                        <td>
                                            <Link to={`/home/edit/${id}`} className="btn btn-outline-primary" style={{ "marginRight": 10 }}>Edit</Link>
                                            <Link to="/home" className="btn btn-danger " onClick={() => deleteMed(id)}>Delete</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                        <li className="pagination-item">Previous</li>
                        <li className="pagination-item">Next</li>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Home;