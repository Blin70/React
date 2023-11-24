import { useState } from "react";

function SearchBar(){
    const [term, setTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={term} type="text" onChange={handleChange}></input>
        </form>
    ) 
}

export default SearchBar;