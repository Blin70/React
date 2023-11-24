import { useState } from "react";
import { GoSearch } from "react-icons/go";
import '../css/SearchBar.css'

function SearchBar(){
    const [term, setTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return(
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input value={term} type="text" onChange={handleChange}></input>
                <button><GoSearch /></button>
            </form> 
        </div>
    ) 
}

export default SearchBar;