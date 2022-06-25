import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [meds, setMeds] = useState([]);

    useEffect(() => {
        loadMed();
    }, [])

    const loadMed = async () => {
        const response = await axios.get("http://localhost:8080/med/");
        console.log("Response", response)
        setMeds(response.data)
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1> Medicine List</h1>
            </div>
        </div>
    )
}

export default Home;