import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMed = () => {
    let navigate = useNavigate();
    const [med, setMed] = useState({
        med_name: "",
        comp_name: "",
        brand: "",
        strength: "",
        med_type: "",
    });

    const { med_name, comp_name, brand, strength, med_type } = med;

    const handleInputChange = e => {
        setMed({ ...med, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        await axios
            .post("http://localhost:8080/med/", med, { withCredentials: true })
            .then(res => navigate("/home"))
            .catch(err => {
                console.log("error", err.response.data)
                navigate("/login")
            })
    }


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Medicine</h2>
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
                    <button className="btn btn-primary btn-block">Add Medicine</button>
                </form>
            </div>
        </div>
    )
}

export default AddMed;