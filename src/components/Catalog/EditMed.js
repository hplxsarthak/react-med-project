
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMed = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [med, setMed] = useState({
        med_name: "",
        comp_name: "",
        brand: "",
        strength: "",
        med_type: "",
    });

    const { med_name, comp_name, brand, strength, med_type } = med;

    useEffect(() => {
        loadMed();
    }, [])

    const handleInputChange = e => {
        setMed({ ...med, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        await axios
            .put(`http://localhost:8080/med/${id}`, med, { withCredentials: true }).then(res => navigate("/home"))
            .then(res => navigate("/home"))
            .catch(err => {
                console.log("error", err.response.data)
                navigate("/login")
            })

    }

    const loadMed = async () => {
        await axios
            .get(`http://localhost:8080/med/${id}`, { withCredentials: true })
            .then(res => {
                setMed({
                    med_name: res.data.Med_Name,
                    comp_name: res.data.Comp_Name,
                    brand: res.data.Brand,
                    strength: res.data.Strength,
                    med_type: res.data.Med_Type,
                })
            })
            .catch(err => {
                console.log("error", err.response.data)
                navigate("/login")
            })

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Medicine</h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Medicine Name/SKU"
                            name="med_name"
                            value={med_name}
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Comapany Name"
                            name="comp_name"
                            value={comp_name}
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Brand Name"
                            name="brand"
                            value={brand}
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Strength in mg"
                            name="strength"
                            value={strength}
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Medicine type tab/bot/inj"
                            name="med_type"
                            value={med_type}
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                    <br />
                    <button className="btn btn-warning btn-block">Update Medicine</button>
                </form>
            </div>
        </div>
    )
}

export default EditMed;