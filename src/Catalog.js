import { useEffect } from "react";

const Catalog = () => {
    useEffect( () => {
        
    })
    return (
        <>
            <h1 style={{textAlign: "center"}}>Med Catalog</h1>
            <h1> Add Medicine</h1>
            <form>
                <input name="med" placeholder="Medicne name" required/>
                <input placeholder="Company name" required/>
                <input placeholder="Brand name" required/>
                <input placeholder="Strength" required/>
                <input placeholder="Medicine Type" required/>
            </form>
        </>
    );

}

export default Catalog;